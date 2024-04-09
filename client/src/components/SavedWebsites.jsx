import { useEffect, useState } from "react";
import { useNavigate }  from 'react-router-dom';
import ConfirmRemovalModal from './ConfirmRemovalModal'

export default function SavedWebsites ({ user, website, setWebsite, savedWebsites, setSavedWebsites }) {
  const navigate = useNavigate();
  const [removalModal, setRemovalModal] = useState()

  function toggleRemovalModal() {
    setRemovalModal(!removalModal)
  }

  function goToForm() {
    navigate("/form");
  }

  useEffect(() => {
    async function fetchSavedWebsites() {
      try {
        const response = await fetch(`http://localhost:8080/api/userWebsites/user/${user.user_id}`, {
          // const response = await fetch(`https://moodboardwebsitebuilder.onrender.com/api/userWebsites/user/${user.user_id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        setSavedWebsites(result);
      } catch (error) {
        throw new Error(`${error.message}`)
      }
    }
    fetchSavedWebsites();
  }, [savedWebsites]);

  return (
    <>
    <div className ="savedWebsitesPage">
    <h2 className="savedWebsitesHeading">Saved Websites</h2>
    <div className="tinyBreakLine"></div>
    { savedWebsites.length? 
   
    <div className="savedWebsitesContainer">
      
      <>
        {savedWebsites.map((savedWebsite) => (
          <>
          <div key={savedWebsite.user_website_id} className="savedWebsiteCard">
            <div className="websiteDetails">
              <p>{savedWebsite.main_heading}</p>
              <button className="savedWebsitesButton" onClick={() => {
                setWebsite(savedWebsite);
                navigate(`/website/${savedWebsite.website_id}`);
                window.scrollTo(0,0)
              }}
              >  Go To Website </button> <br /> <br/>
              <button className="savedWebsitesButton" onClick={toggleRemovalModal}>Delete</button> <br/> <br/>
              <div className="tinyBreakLine"></div>
            </div>
          </div>
          {removalModal&& <ConfirmRemovalModal toggleRemovalModal={toggleRemovalModal} savedWebsite={savedWebsite} savedWebsites={savedWebsites}/>}
          </>
        ))}
        <br/>
        <button className="savedWebsitesButton" onClick={goToForm}>Build A New Website</button> <br/> <br/>

      </>
    </div>
    : 
    <>
    <div className="savedWebsitesCard">
    <p>No websites saved.</p>
    <button className="savedWebsitesButton" onClick={goToForm}> Build A Website</button> <br/> <br/>
    </div>
    </>
      }
    </div>

   

    </>
  );
}; 