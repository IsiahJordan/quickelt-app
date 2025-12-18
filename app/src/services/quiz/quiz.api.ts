import api from '@/services/api'
import Log from '@/utils/log'
import { QuizProps } from '@/types/service'

export async function getQuizList({ page, limit }: QuizProps) {
  const log = Log("getQuizList");
  log.info("called");
  log.debug(`${page}, ${limit}`);

  const res = await api.get("/quiz/list", { 
    params: { 
      page: page,
      limit: limit
    }
  });

  const data = res.data;

  if (!data.success) {
    throw Error(data.message);
  }

  return data.data;
}

export async function getTagList() {
  const log = Log("getTagList");
  log.info("called");
  
  const res = await api.get("/quiz/tag/list", {params: {}});

  const data = res.data;

  if (!data.success) {
    throw Error(data.message);
  }

  return data.data;
}

export async function getTags({ quizId }: QuizProps) {
  const log = Log("getTags");
  log.info("called");

  const res = await api.get("/shared/fetch/quiz/tag", {
    params: {
      quizId: quizId
    }
  });

  const data = res.data;

  if (!data.success) {
    throw Error(data.message);
  }

  return data.data;
}

export async function getQuiz({ quizId }: QuizProps) {
  const log = Log("getQuiz");
  log.info("called");
  log.debug(quizId);

  const res = await api.get("/quiz/fetch", {
    params: {
      quizId: quizId
    }
  });

  const data = res.data;
  log.debug(JSON.stringify(data));

  if (!data.success) {
    throw Error(data.message);
  }

  return data.data[0];
}

export async function getQuizAccount({ quizId, accountId }: QuizProps) {
  const log = Log("getQuizAccount");
  log.info("called");
  log.debug(`${quizId}, ${accountId}`);

  const res = await api.get("/shared/fetch/quiz/account", {
    params: {
      quizId: quizId,
      accountId: accountId
    }
  });

  const data = res.data;

  if (!data.success) {
    throw Error(data.message);
  }

  return data.data[0];
}

export async function postQuizAccount({ quizId, accountId }: QuizProps) {
  const log = Log("postQuizAccount");
  log.info("called");
  log.debug(`${quizId}, ${accountId}`);
  
  const res = await api.post("/shared/create/quiz/account", { quizId, accountId });

  const data = res.data;

  if (!data.success) {
    throw Error(data.message);
  }

  return data;
}
