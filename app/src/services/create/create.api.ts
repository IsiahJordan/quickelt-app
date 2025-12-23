import api from '@/services/api'
import Log from '@/utils/log'
import { CreateProps } from '@/types/service'

export async function postMyQuizList() {
  const log = Log("postMyQuizList");
  log.info("called");

  const result = await api.post("/quiz/author", {}, { withCredentials: true });
  log.debug(JSON.stringify(result));
  
  const data = result.data;

  if (!data.success) {
    throw Error (data.message);
  }

  return data.data;
}
