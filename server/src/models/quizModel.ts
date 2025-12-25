import { verifyInsert, verifySelect } from './utils.module.ts'
import pool from '../utility/db.ts'
import Log from '../utility/log.ts'

export interface QuizProps {
  name?:string;
  quizId?: string;
  imageUrl?: string;
  metadata?: object;
  page?: number;
  limit?: number;
  accountId?: string;
};

export async function selectQuiz({ quizId }: QuizProps) {
  const log = Log("selectQuiz");
  log.info("model called");

  const result = await pool.query(
    `
      SELECT * FROM quizzes
      WHERE id = $1 LIMIT 1
    `, [quizId]
  );

  return verifySelect(result, log);
}

export async function selectAllQuiz({ page, limit }: QuizProps) {
  const log = Log("selectAllQuiz");
  log.info("model called");

  const result = await pool.query(
    `
      SELECT * FROM quizzes
      LIMIT $1 OFFSET $2
    `, [limit, page]
  );

  return verifySelect(result, log);
}

export async function insertQuiz({ name, accountId, imageUrl, metadata }: QuizProps) {
  const log = Log("insertQuiz");
  log.info("model called");

  const result = await pool.query(
    `
      INSERT INTO quizzes
      (name, account_id, image_url, metadata)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `, [name, accountId, imageUrl, metadata]
  );

  return verifyInsert(result, log);
}

export async function insertTag({ name }: QuizProps) {
  const log = Log("insertTag");
  log.info("model called");

  const result = await pool.query(
    `
      INSERT INTO tags
      (name)
      VALUES ($1)
      RETURNING *
    `, [name]
  );

  return verifyInsert(result, log);
}

export async function selectAllTag() {
  const log = Log("selectAllTag");
  log.info("model called");

  const result = await pool.query(
    `
      SELECT * FROM tags
    `
  );

  return verifySelect(result, log);
}

export async function selectAuthor({ accountId }: QuizProps) {
  const log = Log("selectAuthor");
  log.info("model called");

  const result = await pool.query(
    `
      SELECT * FROM quizzes
      WHERE account_id=$1
    `, [accountId]
  );

  return verifySelect(result, log);
}
