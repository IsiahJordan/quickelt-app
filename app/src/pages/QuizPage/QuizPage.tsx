import Log from '@/utils/log'
import QuizListPage from './QuizListPage.module.tsx'

import { useState, useEffect } from 'react'
import useNav from '@/hooks/useNav'

export default function QuizPage() {
  const log = Log('QuizPage');
  
  const { getQuery } = useNav(); 
  const isViewer = getQuery("view");

  return (
    <>
      { isViewer && <>View</>}
      { !isViewer && <QuizListPage/>}
    </>
  )
}

