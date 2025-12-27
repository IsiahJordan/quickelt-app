import Log from '@/utils/log'
import MyQuizListPage from './MyQuizListPage.module.tsx'
import MyQuizCreatePage from './MyQuizCreatePage.module.tsx'

import useNav from '@/hooks/useNav';

export default function MyQuizPage() {
  const log = Log('QuizPage');
  
  const { getQuery } = useNav(); 
  const isViewer = getQuery("view");
  log.debug(isViewer);

  return (
    <>
      { isViewer && <MyQuizCreatePage quizId={isViewer}/>}
      { !isViewer && <MyQuizListPage/>}
    </>
  )
}

