import { verifyInsert, verifySelect } from './utils.module.ts'
import pool from '../utility/db.ts'
import Log from '../utility/log.ts'

export interface QuizProps {
  name?: string;
  imageUrl?: string;
  metadata?: object;
  page?: number;
  limit?: number;
};

export async function selectQuiz({ name }: QuizProps) {
  const log = Log("selectQuiz");
  log.info("model called");

  const result = await pool.query(
    `
      SELECT * FROM quizzes
      WHERE name = $1 LIMIT 1
    `, [name]
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

export async function insertQuiz({ name, imageUrl }: QuizProps) {
  const log = Log("insertQuiz");
  log.info("model called");

  const result = await pool.query(
    `
      INSERT INTO quizzes
      (name, image_url)
      VALUES ($1, $2)
      RETURNING *
    `, [name, imageUrl]
  );

  return verifyInsert(result, log);
}
