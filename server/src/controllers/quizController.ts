import { verifyInsert, verifySelect } from './utils.module.ts'
import { 
  selectQuiz, 
  insertQuiz, 
  selectAllQuiz, 
  selectAuthor,
  insertTag, 
  selectAllTag 
} from '../models/quizModel.ts'
import { verifyToken } from '../utility/security.ts'
import Log from '../utility/log.ts'

//
// fetch quiz and tag
//

export async function fetchQuiz(req, res) {
  const log = Log("fetchQuiz");
  log.info("info");
  
  const {quizId} = req.query;
  log.debug(quizId);

  const result = await selectQuiz({ quizId: quizId });
  log.debug(JSON.stringify(result))
  
  return verifySelect(result, res);
}

export async function fetchAllQuiz(req, res) {
  const log = Log("fetchAllQuiz");
  log.info("info");

  const {page, limit} = req.query;
  log.debug(`${page}, ${limit}`);

  const result = await selectAllQuiz({ page: page, limit: limit });
  log.debug(JSON.stringify(result))
  
  return verifySelect(result, res);
}

export async function fetchAllTag(req, res) {
  const log = Log("fetchAllTag");
  log.info("info");
  
  const result = await selectAllTag();
  log.debug(JSON.stringify(result));

  return verifySelect(result, res);
}

export async function fetchQuizAuthor(req, res) {
  const log = Log("fetchQuizAuthor");
  log.info("called");

  const token = req.cookies.access_token;
  const decoded = await verifyToken(token);
  log.debug(token);

  const result = await selectQuizAuthor({ accountId: token.id });
  log.debug(JSON.stringify(result));

  return verifySelect(result, res);
}

export async function fetchAuthor(req, res) {
  const log = Log("fetchAuthor");
  log.info("info");

  const token = req.cookies.access_token;
  const decoded = await verifyToken(token);

  const result = await selectAuthor({ accountId: decoded.id });
  log.debug(JSON.stringify(result));

  return verifySelect(result, res);
}

//
// create quiz and tag
//

export async function createTag(req, res) {
  const log = Log("createTag");
  log.info("info");
  
  const {name} = req.body;

  const result = await insertTag({ name: name });
  
  return verifyInsert(result, res);
}

export async function createQuiz(req, res) {
  const log = Log("createQuiz");
  log.info("info");
  
  const {name, metadata} = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
  log.debug(name);

  const token = req.cookies.access_token;
  const decoded = await verifyToken(token);

  const result = await insertQuiz({ name: name, accountId: decoded.id, imageUrl: imageUrl, metadata: metadata });
  log.debug(JSON.stringify(result))
  
  return verifyInsert(result, res);
}
