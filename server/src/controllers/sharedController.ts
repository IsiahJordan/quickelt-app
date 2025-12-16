import Log from '../utility/log.ts'
import { selectQuizTag, selectTagQuiz, insertQuizTag } from '../models/sharedModel.ts'
import { verifyInsert, verifySelect } from './utils.module.ts'


export async function fetchQuizTag(req, res) {
  const log = Log("fetchQuizTag");
  
  const {quizId} = req.query;
  log.debug(quizId);

  const result = await selectQuizTag({ quizId: quizId });

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
