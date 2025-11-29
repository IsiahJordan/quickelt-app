import Log from '@/utils/log'
import { Routes, Route } from 'react-router-dom'
import SignPage from '@/pages/SignPage'
import DarkLayout from '@/layouts/DarkLayout'

function App() {
  const log = Log("App");
  log.info("start app");

  return (
    <>
      <Routes>
        <Route element={<DarkLayout/>}>
          <Route path="/sign" element={<SignPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App
