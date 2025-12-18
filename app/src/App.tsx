import Log from '@/utils/log'
import { Routes, Route } from 'react-router-dom'

import SignPage from '@/pages/SignPage'
import QuizPage from '@/pages/QuizPage'

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
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App
