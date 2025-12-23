import { QueryClient } from '@tanstack/react-query'
import graphqlApi from '@/services/api.graphql'
import Log from '@/utils/log'

const log = Log("metric.mutation");

export const postAnswerMutationOptions = (queryClient: QueryClient) => ({
  mutationFn: async (input) => {
    const query = `
      mutation SetAnswer($input: AnswerInput!) {
        setAnswer(input: $input) {
          id
          questions
          answers
          score
          total
        }
      }
    `;

    const res = await graphqlApi.post("", {
      query,
      variables: {
        input
      }
    });

    return res.data.data.setAnswer;
  },

  onSuccess: (data) => {
    log.debug(data);
  }
});

