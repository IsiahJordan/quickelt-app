import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { postRegister } from '@/services/account/account.api'
import { registerMutationOptions } from '@/services/account/account.mutation'
import Log from '@/utils/log'

export function useRegister() {
  const queryClient = useQueryClient();
  const log = Log("useRegister");
  log.info("called");

  return useMutation(registerMutationOptions(queryClient));
}
