import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query'
import Log from '@/utils/log'
import { postAnswerMutationOptions } from '@/services/metric/metric.mutation.ts'

export function useAnswerList() {
  const log = Log("useAnswerList");
  log.info("called");

  const queryClient = useQueryClient();
  
  return useMutation(postAnswerMutationOptions(queryClient));
}
