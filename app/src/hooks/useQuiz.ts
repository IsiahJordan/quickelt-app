import { getQuizListOptions } from '@/services/quiz/quiz.query.ts'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'

import Log from '@/utils/log'

export function useQuizList(page: number, limit: number) {
  const log = Log("useQuizList");
  log.info("called");

  return useQuery(getQuizListOptions(page, limit));
}
