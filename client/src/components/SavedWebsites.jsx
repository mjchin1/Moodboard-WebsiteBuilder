import { useEffect } from "react";
import { useNavigate }  from 'react-router-dom';

export default function SavedWebsites ({ user, website, setWebsite, savedWebsites, setSavedWebsites }) {
  const navigate = useNavigate();
  console.log(website)
  console.log(savedWebsites)
  console.log(user);
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
        console.log(result)
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
      <h2>Saved Websites</h2>
      <>
        {savedWebsites.map((savedWebsite) => (
          <>
          <div key={savedWebsite.user_website_id} className="savedWebsiteCard">
            <div className="websiteDetails">
              <button className="savedWebsiteName" onClick={() => {
                setWebsite(savedWebsite);
                navigate(`/website/${savedWebsite.website_id}`);
              }}
              
              >  {savedWebsite.main_heading} </button> <br /> <br/>
            </div>
          </div>
          </>
        ))}

      </>
    </div>

    </>
  );
}; 