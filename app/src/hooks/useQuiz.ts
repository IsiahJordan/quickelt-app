import { 
  getQuizListOptions, 
  getTagListOptions, 
  getTagsOptions, 
  getQuizOptions 
} from '@/services/quiz/quiz.query.ts'
import {
  postFetchQuizAccountOptions, 
  postCreateQuizAccountOptions 
} from '@/services/quiz/quiz.mutation.ts'
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

export function useCreateQuizAccount() {
  const log = Log("useCreateQuizAccount");
  log.info("called");

  const queryClient = useQueryClient();

  return useMutation(postCreateQuizAccountOptions(queryClient));
}

export function useFetchQuizAccount() {
  const log = Log("useFetchQuizAccount");
  log.info("called");

  const queryClient = useQueryClient();

  return useMutation(postFetchQuizAccountOptions(queryClient));
}
