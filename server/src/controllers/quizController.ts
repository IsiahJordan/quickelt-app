import { verifyInsert, verifySelect } from './utils.module.ts'
import { selectQuiz, insertQuiz } from '../models/quizModel.ts'
import { signToken } from '../utility/security.ts'
import Log from '../utility/log.ts'

export async function fetchQuiz(req, res) {
  const log = Log("fetchQuiz");
  log.info("info");
  
  const {name} = req.query;
  log.debug(name);

  const result = await selectQuiz({ name: name });
  log.debug(JSON.stringify(result))
  
  return verifySelect(result, res);
}

export async function createQuiz(req, res) {
  const log = Log("createQuiz");
  log.info("info");
  
  const {name, metadata} = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
  log.debug(name);

  const result = await insertQuiz({ name: name, imageUrl: imageUrl, metadata: metadata });
  log.debug(JSON.stringify(result))
  
  return verifyInsert(result, res);
}

