import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import Website from './components/Website'
import WebsiteForm from './components/WebsiteForm'
import Navigations from './components/Navigations'
import Registration from './components/Registration'
import SavedWebsites from './components/SavedWebsites'


function App() {
  const [user, setUser] = useState("")
  const [savedWebsites, setSavedWebsites] = useState([])

  return (
    <>
      <Navigations/>
      <Routes>
      <Route path='/' element={<Website/>} />
      <Route path='/form' element={<WebsiteForm/>} />
      <Route path='/register' element={<Registration user={user} setUser={setUser}/>} />
      <Route path='/websites' element={<SavedWebsites savedWebsites={savedWebsites} setSavedWebsites={setSavedWebsites}/>} />
      </Routes>
    </>
  )
}

export default App
