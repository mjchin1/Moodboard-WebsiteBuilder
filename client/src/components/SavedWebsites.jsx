import { useEffect } from "react";
import { useNavigate }  from 'react-router-dom';

export default function SavedWebsites ({ user, savedWebsites, setSavedWebsites }) {
  const navigate = useNavigate()
  useEffect(() => {
    async function fetchSavedWebsites() {
      try {
        const response = await fetch("http://localhost:8080/api/userWebsites/user/1", {
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
  }, []);

  return (
    <>
    <br/>
    <div className="savedWebsitesContainer">
      <>
        {savedWebsites.map((website) => (
          <>
          <div key={website.user_website_id} className="savedWebsiteCard">
            <div className="websiteDetails">
              <button className="savedWebsiteName" onClick={() => {
                navigate("/website")
              }}
              
              >  {website.main_heading} </button> <br /> <br/>
            </div>
          </div>
          </>
        ))}

      </>
    </div>

    </>
  );
}; 