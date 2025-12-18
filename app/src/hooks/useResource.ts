import Log from '@/utils/log'
import { postToken } from '@/services/helper/helper.api.ts'
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query'
import useNav from '@/hooks/useNav'

export function useToken() {
  const log = Log("useToken");
  log.info("called");

  const { goBack } = useNav();
  
  return useMutation({
    mutationFn: postToken,
    onSuccess: () => {
      log.debug("successful verification of auth");
    },
    onError: () => {
      log.danger("unathorized access");
      goBack();
    }
  });
} 
