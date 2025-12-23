import Log from '@/utils/log'
import { postMyQuizList } from './create.api.ts'

const log = Log("create.mutation");

export const postMyQuizListMutationOptions = (queryClient) => ({
  mutationFn: postMyQuizList,
  onSuccess: (data) => {
    log.debug("called");
  }
});
