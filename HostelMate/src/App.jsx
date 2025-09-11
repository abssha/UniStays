import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/team' element={<Team/>}/>
      </Routes>
    </>
  )
}

export default App