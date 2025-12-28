import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { getQuestionOptions } from '@/services/question/question.query'
import { postQuestionOptions } from '@/services/question/question.mutation'
import { QuestionProps } from '@/types/service.d.ts'
import Log from '@/utils/log'

export function useQuestionList(quizId: string) {
  const log = Log("useQuestionList");
  log.info("called");

  return useQuery(getQuestionOptions(quizId));
}

export function useQuestionCreate() {
  const log = Log("useQuestionCreate");
  log.info("called");

  const queryClient = useQueryClient();

  return useMutation(postQuestionOptions(queryClient));
}
