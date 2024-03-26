import { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import SaveWebsiteButton from './SaveWebsiteButton'
import RegistrationReminderModal from './RegistrationReminderModal'
import WebsiteSavedMessage from './WebsiteSavedMessage'


export default function Website({user, website, setWebsite, savedWebsites, setSavedWebsites}) {
  const navigate = useNavigate();

  const [registrationModal, setRegistrationModal] = useState(false);
  const [savedMessageModal, setSavedMessageModal] = useState(false);

  function toggleRegistrationModal() {
    setRegistrationModal(!registrationModal)
  }

  function toggleSavedMessageModal() {
    setSavedMessageModal(!savedMessageModal)
  }

  function goToForm() {
    navigate("/form");
  }

  function home() {
    navigate("/")
  }

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

    
    <div className="websitePageBody">
      <br/>
      <div className="websitePageButtons">
      <SaveWebsiteButton toggleRegistrationModal={toggleRegistrationModal} toggleSavedMessageModal={toggleSavedMessageModal} savedWebsites={savedWebsites} setSavedWebsites={setSavedWebsites} user_id={user.user_id} website_id={website.website_id}/>
      <button onClick={goToForm}>Create a New Website</button>
      <button onClick={home}>Home</button>
      </div>
      <div className="websiteContent">
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
     
     

      {registrationModal? <RegistrationReminderModal toggleRegistrationModal={toggleRegistrationModal} /> : null}
      {savedMessageModal? <WebsiteSavedMessage toggleSavedMessageModal={toggleSavedMessageModal} /> : null}
      </div>
      </div>

   </>

  );
};