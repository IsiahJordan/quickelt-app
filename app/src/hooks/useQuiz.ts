import { getQuizListOptions, getTagListOptions, getTagsOptions, getQuizOptions, postQuizAccountOptions } from '@/services/quiz/quiz.query.ts'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'

import Log from '@/utils/log'

export function useQuizList(page: number, limit: number) {
  const log = Log("useQuizList");
  log.info("called");

  return useQuery(getQuizListOptions(page, limit));
}

export function useTagList() {
  const log = Log("useTagList");
  log.info("called");

  return useQuery(getTagListOptions());
}

export function useTags(quizId: string) {
  const log = Log("useTags");
  log.info("called");

  return useQuery(getTagsOptions(quizId));
}

export function useQuiz(quizId: string) {
  const log = Log("useQuiz");
  log.info("called");

  log.debug(quizId);

  return useQuery(getQuizOptions(quizId));
}

export function useQuizAccount(quizId: string, accountId: string) {
  const log = Log("useQuizAccount");
  log.info("called");

  return 
}
