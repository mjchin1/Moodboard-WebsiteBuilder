import { useEffect, useState } from "react";
import { useNavigate }  from 'react-router-dom';
import ConfirmRemovalModal from './ConfirmRemovalModal'

export default function SavedWebsites ({ user, website, setWebsite, savedWebsites, setSavedWebsites }) {
  const navigate = useNavigate();
  const [removalModal, setRemovalModal] = useState()

  function toggleRemovalModal() {
    setRemovalModal(!removalModal)
  }

  useEffect(() => {
    async function fetchSavedWebsites() {
      try {
        const response = await fetch(`http://localhost:8080/api/userWebsites/user/${user.user_id}`, {
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
    <div>
    <br/>
    <h2>Saved Websites</h2>
    { savedWebsites.length? 
   
    <div className="savedWebsitesContainer">
      
      <>
        {savedWebsites.map((savedWebsite) => (
          <>
          <div key={savedWebsite.user_website_id} className="savedWebsiteCard">
            <div className="websiteDetails">
              <p>{savedWebsite.main_heading}</p>
              <button className="savedWebsiteName" onClick={() => {
                setWebsite(savedWebsite);
                navigate(`/website/${savedWebsite.website_id}`);
              }}
              >  Go To Website </button> <br /> <br/>
              <button onClick={toggleRemovalModal}>Delete</button>
            </div>
          </div>
          {removalModal&& <ConfirmRemovalModal toggleRemovalModal={toggleRemovalModal} savedWebsite={savedWebsite} savedWebsites={savedWebsites}/>}
          </>
        ))}

      </>
    </div>
    : <p>No websites saved.</p>
      }
    </div>

   

    </>
  );
}; 