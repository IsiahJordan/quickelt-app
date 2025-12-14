import graphqlApi from '@/services/api.graphql'
import Log from '@/utils/log'

export const getQuestionOptions = (quizId: string) => ({
  queryKey: ['questions', quizId],
  queryFn: async () => {
    const query = `
      query($id: String!){
        getQuestions(id: $id){
          id
          quizId
          description
          options
          answer
        }
      } 
    `;

    const res = await graphqlApi.post("", {
      query, 
      variables: { id: quizId }
    });
    
    return res.data.data.getQuestions;
  }
});
