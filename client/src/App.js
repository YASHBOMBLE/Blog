import React from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import Signup from './views/Signup/Signup'
import Profile from './views/Profile/Profile'
import Addblog from './views/Addblog/Addblog'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/addblog' element={<Addblog />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App