import ChangeMode from './components/ChangeMode/ChangeMode'
import Login from './pages/Login/Login'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Game from './pages/Game/Game'
import FinishQuestions from './components/FinishQuestions/FinishQuestions'

import LogOut from './components/LogOut/LogOut'
import FreePlay from './pages/FreePlay/FreePlay'

function App() {
  const user = localStorage.getItem('dataUserTrivial')

  return (
    <>
      {user && <Header></Header>}

      <Routes>
        <Route
          path='/'
          element={user ? <Home /> : <Navigate to='/login' />}
        ></Route>
        <Route
          path='/login'
          element={user ? <Navigate to='/' /> : <Login />}
        ></Route>
        <Route path='/play' element={user ? <Game /> : <Login />}></Route>
        <Route
          path='/play/results'
          element={user ? <FinishQuestions /> : <Login />}
        ></Route>
        <Route
          path='/freeplay'
          element={user ? <FreePlay /> : <Login />}
        ></Route>
        <Route path='/logout' element={user ? <LogOut /> : <Login />}></Route>

        <Route
          path='*'
          element={user ? <Navigate to='/' /> : <Login />}
        ></Route>
      </Routes>
      <ChangeMode></ChangeMode>
    </>
  )
}

export default App
