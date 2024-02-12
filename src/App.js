import React from 'react'
import Home from './components/Home'
import Page from './components/Registration'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/allstudents' element={<Page/>}/>
    </Routes>
      
      
    
  )
}

export default App
