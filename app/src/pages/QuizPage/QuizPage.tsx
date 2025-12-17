import Log from '@/utils/log'
import QuizListPage from './QuizListPage.module'
import QuizViewPage from './QuizViewPage.module'

import { useState, useEffect } from 'react'
import useNav from '@/hooks/useNav'

export default function QuizPage() {
  const log = Log('QuizPage');
  
  const { getQuery } = useNav(); 
  const isViewer = getQuery("view");
  log.debug(isViewer);

  return (
    <>
      { isViewer && <QuizViewPage quizId={isViewer}/>}
      { !isViewer && <QuizListPage/>}
    </>
  )
}

