import { useState } from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import './App.css'
import Website from './components/Website'
import WebsiteForm from './components/WebsiteForm'
import Navigations from './components/Navigations'
import Registration from './components/Registration'
import SavedWebsites from './components/SavedWebsites'
import Login from './components/Login'
import WebsiteCreatedMessage from './components/WebsiteCreatedMessage'
import WebsiteSavedMessage from './components/WebsiteSavedMessage'
import LogoutButton from './components/LogoutButton'
import LogoutPage from './components/LogoutPage'
import EditForm from './components/EditForm'




function App() {
  const [website, setWebsite] = useState({});
  const [user, setUser] = useState({});
  const [savedWebsites, setSavedWebsites] = useState([]);
  const location = useLocation();

  

  return (
    
    <> 
      <div className="app">

      <br/>
      {location.pathname!== `/website/${website.website_id}` ?
      <div className="appHeader"> 
      {user.user_id? <LogoutButton setWebsite={setWebsite} setSavedWebsite={setSavedWebsites} user={user} setUser={setUser}/> : null }
      <h1 className="appHeading">MOODBOARD</h1>
      <h2 className="appSubheading">A Website-Building App</h2>
      <Navigations setWebsite={setWebsite} setSavedWebsite={setSavedWebsites} user={user} setUser={setUser}/> <br/>
      <div className="pageDivider"></div>
      </div>
        : null
        }
      
      <div className="appBody">
      <Routes>
      <Route path='/' element={<WebsiteForm website={website} setWebsite={setWebsite}/>} />
      <Route path='/website/:id' element={<Website savedWebsites={savedWebsites} setSavedWebsites={setSavedWebsites} user={user} website={website} setWebsite={setWebsite}/>} />
      <Route path='/form' element={<WebsiteForm website={website} setWebsite={setWebsite}/>} />
      <Route path='/register' element={<Registration website={website} user={user} setUser={setUser}/>} />
      <Route path='/login' element={<Login website={website} user={user} setUser={setUser}/>} />
      <Route path='/websiteCreated' element={<WebsiteCreatedMessage website={website}/>} />
      <Route path='/websiteSaved' element={<WebsiteSavedMessage/>} />
      <Route path='/websites' element={<SavedWebsites user={user} setUser={setUser} setWebsite={setWebsite} savedWebsites={savedWebsites} setSavedWebsites={setSavedWebsites}/>} />
      <Route path='/logout' element={<LogoutPage/>} />
      <Route path='/edit' element={<EditForm website={website} setWebsite={setWebsite}/>} />
      </Routes>
      </div>
      { location.pathname!== `/website/${website.website_id}` ?
      <footer className="appFooter">
        <p> MOODBOARD by Melissa J. Chin, 2024.</p>
        <a className="githubLink" href="https://github.com/mjchin1/Moodboard-WebsiteBuilder" target="_blank"> GitHub Repository</a>
      </footer>
      : null
}
      </div>
    </>
  )
}

export default App
