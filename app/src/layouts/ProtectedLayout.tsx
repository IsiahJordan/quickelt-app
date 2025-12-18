import { Outlet } from 'react-router-dom'
import { useToken } from '@/hooks/useResource'
import { useEffect } from 'react'

export default function ProtectedLayout() {
  const tokenMutation = useToken();
  
  useEffect(() => {
    tokenMutation.mutate();
  }, []);
   
  if (tokenMutation.isPending) {
    return <>Waiting...</>;
  }

  return (
    <Outlet/>
  ); 
}
