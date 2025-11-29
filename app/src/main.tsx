import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Log from '@/utils/log'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { NavProvider } from '@/context/NavContext'

const log = Log("GLOBAL");

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      onError: (error: any) => {
        log.danger(error);
      }
    }
  },
  mutations: {
    onError: (error: any) => {
      log.danger(error);
    }
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <NavProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </NavProvider>
    </BrowserRouter>
  </StrictMode>,
)
