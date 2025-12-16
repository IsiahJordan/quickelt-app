import Log from '../utility/log.ts'
import { verifyInsert, verifySelect } from './utils.module.ts'
import pool from '../utility/db.ts'

export interface QuizTagProps {
  quizId?: string;
  tagId?: number;
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
    `, [quizId, tagId]
  );

  return verifyInsert(result, log);
}
