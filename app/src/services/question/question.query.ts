import { getQuestions } from './question.graphql.ts'

export const getQuestionOptions = (quizId: string) => ({
  queryKey: ['questions', quizId],
  queryFn: () => getQuestions({quizId: quizId}),
  enabled: !!quizId
});
