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
