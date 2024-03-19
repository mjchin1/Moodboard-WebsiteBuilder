import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import Website from './components/Website'
import WebsiteForm from './components/WebsiteForm'
import Navigations from './components/Navigations'


function App() {

  return (
    <>
      <Navigations/>
      <Routes>
      <Route path='/' element={<Website/>} />
      <Route path='/form' element={<WebsiteForm/>} />
      </Routes>
    </>
  )
}

export default App
