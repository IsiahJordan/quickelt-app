import { verifyInsert, verifySelect } from './utils.module.ts'
import pool from '../utility/db.ts'
import Log from '../utility/log.ts'

export interface AccountProps {
  email: string;
  username?: string;
  password: string;
};

export async function insertAccount({ email, username, password }: AccountProps) {
  const log = Log("insertAccount");
  log.info("model called");

  const result = await pool.query(
    `
      INSERT INTO accounts
      (email, username, password)
      VALUES ($1, $2, $3)
    `, [email, username, password]
  );

  return verifyInsert(result, log);
}

