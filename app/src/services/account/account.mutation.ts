import { postRegister } from './account.api.ts'
import Log from '@/utils/log'

const log = Log("account.mutation");

export const registerMutationOptions = (queryClient) => ({
  mutationFn: postRegister,
  onSuccess: (data) => {
    log.debug("successful register");
  }
});
