import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './src/Pages/Home'
import Layout from './src/Pages/Layout/Layout'
import About from './src/Pages/Main/About'
import Contact from './src/Pages/Main/Contact'
import Login from './src/Pages/Main/Login'
import Signup from './src/Pages/Main/Signup'
import Services from './src/Pages/Main/Services'

const MyRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='services' element={<Services/>}/>
      


      </Route>

    </Routes>
    
    
    </BrowserRouter>
    
    
  )
}

export default MyRoutes