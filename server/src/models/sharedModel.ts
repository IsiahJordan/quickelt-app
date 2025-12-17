import Log from '../utility/log.ts'
import { verifyInsert, verifySelect } from './utils.module.ts'
import pool from '../utility/db.ts'

interface QuizTagProps {
  quizId?: string;
  tagId?: number;
};

interface QuizAccountProps {
  quizId?: string;
  accountId?: string;
};

export async function selectQuizTag({ quizId }: QuizTagProps) {
  const log = Log("selectQuizTag");
  log.info("called");

  const result = await pool.query(
    `
      SELECT * FROM quiz_tag QT
      INNER JOIN tags T ON QT.tag_id = T.id
      WHERE QT.quiz_id = $1
    `, [quizId]
  );

  return verifySelect(result, log);
}

export async function selectQuizTaken({ quizId, accountId }: QuizAccountProps) {
  const log = Log("selectQuizTaken");
  log.info("called");

  const result = await pool.query(
    `
      SELECT * FROM quiz_taken
      WHERE quiz_id = $1 AND account_id = $2
    `, [quizId, accountId]
  );

  return verifySelect(result, log);
}

export async function selectTagQuiz({ tagId }: QuizTagProps) {
  const log = Log("selectTagQuiz");
  log.info("called");

  const result = await pool.query(
    `
      SELECT * FROM quiz_tag QT
      INNER JOIN quizzes Q ON Q.id = QT.quiz_id
      WHERE QT.tag_id = $1
    `, [tagId]
  );

  return verifySelect(result, log);
}

export async function insertQuizTag({ quizId, tagId }: QuizTagProps) {
  const log = Log("insertQuizTag");
  log.info("called");

  const result = await pool.query(
    `
      INSERT INTO quiz_tag 
      (quiz_id, tag_id) 
      VALUES ($1, $2)
      RETURNING *
    `, [quizId, tagId]
  );

  return verifyInsert(result, log);
}

export async function insertQuizTaken({ quizId, accountId }: QuizTaken) {
  const log = Log("insertQuizTaken");
  log.info("called");

  const result = await pool.query(
    `
      INSERT INTO quiz_taken
      (quiz_id, account_id)
      VALUES ($1, $2)
      RETURNING *
    `, [quizId, accountId]
  );

  return verifyInsert(result, log);
}
