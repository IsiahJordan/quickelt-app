import Log from '@/utils/log'
import { 
  postCreateQuizAccount, 
  postFetchQuizAccount,
  postCreateQuiz
} from './quiz.api.ts'

const log = Log("quiz.mutation");

export const postCreateQuizAccountOptions = (queryClient) => ({
  mutationFn: postCreateQuizAccount,
  onSuccess: (data) => {
    log.debug("successful quiz account create");
  }
});

export const postFetchQuizAccountOptions = (queryClient) => ({
  mutationFn: postFetchQuizAccount,
  onSuccess: (data) => {
    log.debug("successful fetch quiz account");
  }
});

export const postCreateQuizMutationOptions = (queryClient) => ({
  mutationFn: postCreateQuiz,
  onSuccess: (data) => {
    log.debug("successful create quiz");
  }
});

