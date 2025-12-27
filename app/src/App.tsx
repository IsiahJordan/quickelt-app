import Log from '@/utils/log'
import { Routes, Route } from 'react-router-dom'

import SignPage from '@/pages/SignPage'
import QuizPage from '@/pages/QuizPage'
import QuestionPage from '@/pages/QuestionPage'
import MyQuizPage from '@/pages/MyQuizPage'
import QuizCreatePage from '@/pages/QuizCreatePage'

import DarkLayout from '@/layouts/DarkLayout'
import NavLayout from '@/layouts/NavLayout'
import ProtectedLayout from '@/layouts/ProtectedLayout'

function App() {
  const log = Log("App");
  log.info("start app");

  return (
    <>
      <Routes>
        <Route element={<DarkLayout/>}>
          <Route path="/sign" element={<SignPage/>}/>
          <Route element={<NavLayout/>}>
            <Route element={<ProtectedLayout/>}>
              <Route path="/quiz" element={<QuizPage/>}/>
              <Route path="/create/quiz" element={<MyQuizPage/>}/>
            </Route>
          </Route>
        </Route>
        <Route element={<ProtectedLayout/>}>
          <Route path="/quiz/attempt/:id" element={<QuestionPage/>}/>
          <Route path="/create/quiz/:id" element={<QuizCreatePage/>}>
        </Route>
      </Routes>
    </>
  );
}

export default App
