import { useContext } from 'react'
import { NavContextType } from '@/types/context.d'
import { NavContext } from '@/context/NavContext'
import Log from '@/utils/log'

export default function useNav(): NavContextType {
  const log = Log("useNav");
  const context = useContext(NavContext);

  if (!context) {
    log.danger("must be within a NavProvider");
    return undefined;
  }

  return context;
}

