import { verifyInsert } from './utils.module.ts'
import { insertAccount } from '../models/accountModel.ts'
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

