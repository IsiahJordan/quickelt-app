import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { 
  registerMutationOptions, 
  loginMutationOptions, 
  postFetchAccountMutationOptions 
} from '@/services/account/account.mutation'
import Log from '@/utils/log'

export function useRegister() {
  const queryClient = useQueryClient();
  const log = Log("useRegister");
  log.info("called");

  return useMutation(registerMutationOptions(queryClient));
}

export function useLogin() {
  const queryClient = useQueryClient();
  const log = Log("useLogin");
  log.info("called");

  return useMutation(loginMutationOptions(queryClient));
}

export function useAccount() {
  const queryClient = useQueryClient();
  const log = Log("useAccount");
  log.info("called");

  return useMutation(postFetchAccountMutationOptions(queryClient));
}
