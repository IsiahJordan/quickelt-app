import { verifyInsert, verifySelect } from './utils.module.ts'
import { insertAccount, selectAccount } from '../models/accountModel.ts'
import { signToken } from '../utility/security.ts'
import Log from '../utility/log.ts'

import bcrypt from 'bcrypt'

export async function register(req, res) {
  const log = Log("register");

  const {email, username, password} = req.body;
  log.info(`called by ${email}`);
  log.debug(`data: ${email} ${username} ${password}`);

  const passwordHash = await bcrypt.hash(password, 10);
  log.debug(`password hashed: ${passwordHash}`);

  const user = await insertAccount({
    email: email,
    username: username,
    password: passwordHash
  });
  log.info("called insertAccount");
  log.debug(`result: ${user}`);

  return verifyInsert(user, res);
}

export async function login(req, res) {
  const log = Log("login");

  const {email, password} = req.body;
  log.info(`called by ${email}`);
  log.debug(`data: ${email} ${password}`);

  // get information from database
  const [acc] = await selectAccount({ email: email });
  log.debug(JSON.stringify(acc));

  // make sure that it matches the password
  const match = await bcrypt.compare(password, acc.password);
  if (!match) {
    log.warn("did not matched");
    return res.status(400).json({
      success: false,
      message: "password didn't match"
    });
  }

  // create authorization information to be used
  const auth = {id: acc.id, email: acc.email, role: acc.role};
  log.debug(JSON.stringify(auth));

  log.info("generate JWT token");
  // make sure to pass token
  const token = signToken(auth, "1h");
  
  res.cookie("access_token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 60 * 60 * 1000
  });

  log.debug("finish cookie")
  log.debug(JSON.stringify(res.getHeaders(), null, 2));

  return res.status(200).json({
    success: true,
    message: "successful login"
  });
}
