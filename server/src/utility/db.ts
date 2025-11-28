import { Pool } from 'pg'
import Log from './log.ts'
import 'dotenv/config'

const log = Log("db");
log.debug(
  `
    ${process.env.DB_USER}, 
    ${process.env.DB_HOST},
    ${process.env.DB_NAME},
    ${process.env.DB_PASSWORD},
    ${process.env.DB_PORT}
  `
);

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

export default pool;
