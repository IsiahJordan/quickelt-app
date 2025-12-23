import Log from '@/utils/log'
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query'
import { postMyQuizListMutationOptions } from '@/services/create/create.mutation.ts'

export function useMyQuizList() {
  const log = Log("useMyQuizList");
  log.info("called");

  const queryClient = useQueryClient();
  
  return useMutation(postMyQuizListMutationOptions(queryClient));
}

