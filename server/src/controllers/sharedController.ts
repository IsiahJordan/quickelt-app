import Log from '../utility/log.ts'
import { 
  selectQuizTag, 
  selectQuizTaken, 
  selectTagQuiz, 
  insertQuizTag, 
  insertQuizTaken,
  insertQuizAuthor
} from '../models/sharedModel.ts'
import { verifyInsert, verifySelect } from './utils.module.ts'
import { verifyToken } from "../utility/security.ts";

export async function fetchQuizTag(req, res) {
  const log = Log("fetchQuizTag");
  
  const {quizId} = req.query;
  log.debug(quizId);

  const result = await selectQuizTag({ quizId: quizId });

  return verifySelect(result, res);
}

export async function fetchQuizTaken(req, res) {
  const log = Log("fetchQuizTaken");

  const {quizId} = req.body;
  log.debug(`${quizId}`);

  const token = req.cookies.access_token;
  const decoded = await verifyToken(token);
  log.debug(decoded.id);
  
  const result = await selectQuizTaken({ quizId: quizId, accountId: decoded.id });

  return verifySelect(result, res);
}

export async function fetchTagQuiz(req, res) {
  const log = Log("fetchTagQuiz");

  const {tagId} = req.query;
  log.debug(tagId);
  
  const result = await selectTagQuiz({ tagId: tagId });
  
  return verifySelect(result, res);
}

export async function createQuizTag(req, res) {
  const log = Log("createQuizTag");

  const {quizId, tagId} = req.body;
  log.debug(`${quizId}, ${tagId}`);

  const result = await insertQuizTag({ quizId: quizId, tagId: tagId });

  return verifyInsert(result, res);
}


export async function createQuizTaken(req, res) {
  const log = Log("createQuizTaken");

  const {quizId} = req.body;
  log.debug(`${quizId}`);

  const token = req.cookies.access_token;
  const decoded = await verifyToken(token);
  log.debug(decoded.id);

  const result = await insertQuizTaken({ quizId: quizId, accountId: decoded.id });

  return verifyInsert(result, res);
}

export async function createQuizAuthor(req, res) {
  const log = Log("createQuizAuthor");

  const {quizId} = req.body;
  log.debug(`${quizId}`);

  const token = req.cookies.access_token;
  const decoded = await verifyToken(token);
  log.debug(decoded.id);

  const result = await insertQuizAuthor({ quizId: quizId, accountId: decoded.id });

  return verifyInsert(result, res);
}
