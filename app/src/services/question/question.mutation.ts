import { postQuestion } from './question.graphql.ts'
import Log from '@/utils/log'

const log = Log("question.mutation");

export const postQuestionOptions = (queryClient) => ({
  mutationFn: postQuestion,
  onSuccess: (data) => {
    log.debug("successful post question");
  }
});
