import { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import SaveWebsiteButton from './SaveWebsiteButton'


export default function Website({user, website, setWebsite, savedWebsites, setSavedWebsites}) {
  const navigate = useNavigate();
  useEffect(() => {
    async function getWebsite() {
      try {
        const response = await fetch(`http://localhost:8080/api/websites/${website.website_id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        setWebsite(result);
      } catch (error) {
      }
    }
    if (website.website_id) {
      getWebsite();
    }
  }, []);

  return (
    <>
      <h1>{website.main_heading}</h1>
      <h2>{website.subheading}</h2>
      <img className="mainPhoto" src={website.main_photo}></img>
      <h3>{website.p1_heading}</h3>
      <p>{website.p1_body}</p>
      <img className="midPhoto" src={website.mid_photo1}></img>
      <img className="midPhoto" src={website.mid_photo2}></img>
      <h3>{website.p2_heading}</h3>
      <p>{website.p2_body}</p>
      <img className="footerPhoto" src={website.footer_photo}></img>
     
      <SaveWebsiteButton savedWebsites={savedWebsites} setSavedWebsites={setSavedWebsites} user_id={user.user_id} website_id={website.website_id}/>

   </>

  );
};