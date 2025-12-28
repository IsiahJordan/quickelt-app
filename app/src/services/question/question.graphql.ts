import graphqlApi from '@/services/api.graphql'
import Log from '@/utils/log'
import { QuestionProps } from '@/types/service.d.ts'

export async function postQuestion({ 
  quizId, 
  description,
  options,
  answer,
  imageUrl
}: QuestionProps ) {
  const log = Log("postQuestion");
  log.info("called");

  log.debug(`
    ${quizId},
    ${description},
    ${options},
    ${answer},
    ${imageUrl}
  `);

  const query = `
      mutation($input: QuestionInput!) {
          setQuestion(input: $input) {
              quizId
              description
              options
              answer
              imageUrl
          }
      }
  `;

  const res = await graphqlApi.post("", {
    query, 
    variables: { 
      input: {
        quizId,
        description,
        options,
        answer,
        imageUrl
      }
    }
  });
  
  return res.data.data.setQuestion;
}

export async function getQuestions({ quizId }: QuestionProps) {
  const log = Log("getQuestions");
  log.info("called");
  
  const query = `
    query($id: String!){
      getQuestions(id: $id){
        id
        quizId
        description
        options
        answer
        imageUrl
      }
    } 
  `;

  const res = await graphqlApi.post("", {
    query, 
    variables: { id: quizId }
  });
  
  return res.data.data.getQuestions;
};
