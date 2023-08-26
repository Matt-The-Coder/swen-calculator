import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './css/index.css'
import Login from './pages/Login'
import Homelayout from './layouts/Homelayout'
import Homepage from './pages/Homepage'
import Signup from './pages/Signup'
import Quotepage from './pages/Quotepage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<Homelayout/>}>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/search/:searchParams' element={<Homepage/>}/>
      <Route path='/quote/:carParams' element={<Quotepage/>}/>
      </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  
  </React.StrictMode>,
)
