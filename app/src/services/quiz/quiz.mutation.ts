import Log from '@/utils/log'
import { postQuizAccount } from './quiz.api.ts'

const log = Log("quiz.mutation");

export const postQuizAccountOptions = (queryClient) => ({
  mutationFn: postQuizAccount,
  onSuccess: (data) => {
    log.debug("successful quiz account create");
  }
});
