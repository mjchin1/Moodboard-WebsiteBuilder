import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import Website from './components/Website'
import AllUserWebsites from './components/AllUserWebsites'


function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<Website/>} />
      <Route path='/user' element={<AllUserWebsites/>} />
      </Routes>
    </>
  )
}

export default App
