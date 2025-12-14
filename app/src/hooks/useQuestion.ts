import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { getQuestionOptions } from '@/services/question/question.query'
import Log from '@/utils/log'

export function useQuestionList(quizId: string) {
  const log = Log("useQuestionList");
  log.info("called");

  return useQuery(getQuestionOptions(quizId));
}
