import { getQuizList, getTagList, getTags, getQuiz, getQuizAccount } from './quiz.api.ts'

export const getQuizListOptions = (page: number, limit: number) => ({
  queryKey: ['quizList', page, limit],
  queryFn: () => getQuizList({page, limit})
});

export const getTagListOptions = () => ({
  queryKey: ['tagList'],
  queryFn: () => getTagList()
});

export const getTagsOptions = (quizId: string) => ({
  queryKey: ['tags', quizId],
  queryFn: () => getTags({quizId}),
  enabled: !!quizId
});

export const getQuizOptions = (quizId: string) => ({
  queryKey: ['quiz', quizId],
  queryFn: () => getQuiz({quizId}),
  enabled: !!quizId
});

export const getQuizAccountOptions = (quizId: string, accountId: string) => ({
  queryKey: ['quizaccount', quizId, accountId],
  queryFn: () => getQuizAccount({quizId, accountId}),
    enabled: !!quizId
});
