import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import AllWebsites from './components/AllWebsites'
import Website from './components/Website'
import WebsiteForm from './components/WebsiteForm'
import Navigations from './components/Navigations'
import Registration from './components/Registration'
import SavedWebsites from './components/SavedWebsites'



function App() {
  const [websites, setWebsites] = useState([]);
  const [website, setWebsite] = useState({});
  const [user, setUser] = useState("")
  const [savedWebsites, setSavedWebsites] = useState([])

  

  return (
    <>
      <Navigations/>
      <Routes>
      <Route path='/' element={<Registration/>} />
      <Route path='/all' element={<AllWebsites websites={websites} setWebsites={setWebsites}/>} />
      <Route path='/website' element={<Website website={website} setWebsite={setWebsite}/>} />
      <Route path='/website/:id' element={<Website website={website} setWebsite={setWebsite}/>} />
      <Route path='/form' element={<WebsiteForm/>} />
      <Route path='/register' element={<Registration user={user} setUser={setUser}/>} />
      <Route path='/websites' element={<SavedWebsites website={website} setWebsite={setWebsite} savedWebsites={savedWebsites} setSavedWebsites={setSavedWebsites}/>} />
      </Routes>
    </>
  )
}

export default App
