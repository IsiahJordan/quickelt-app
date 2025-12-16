import { getQuizList, getTagList, getTags } from './quiz.api.ts'
import Log from '@/utils/log'

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
  queryFn: () => getTags({quizId})
});
