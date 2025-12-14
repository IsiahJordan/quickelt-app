import { getQuizList } from './quiz.api.ts'
import Log from '@/utils/log'

export const getQuizListOptions = (page: number, limit: number) => ({
  queryKey: ['quizList', page, limit],
  queryFn: () => getQuizList({page, limit})
});
