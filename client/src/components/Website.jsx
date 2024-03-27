import { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import SaveWebsiteButton from './SaveWebsiteButton'
import RegistrationReminderModal from './RegistrationReminderModal'
import WebsiteSavedMessage from './WebsiteSavedMessage'


export default function Website({user, website, setWebsite, savedWebsites, setSavedWebsites}) {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

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
      <div className="websiteInnerBody">
      
      <div className="websiteHeader">
      <h1>{website.main_heading}</h1>
      <h2 className="websiteSubheading">{website.subheading}</h2>

      <div className="websitePageButtons">
      <SaveWebsiteButton toggleRegistrationModal={toggleRegistrationModal} toggleSavedMessageModal={toggleSavedMessageModal} savedWebsites={savedWebsites} setSavedWebsites={setSavedWebsites} user_id={user.user_id} website_id={website.website_id}/>
      <button onClick={goToForm}>Create a New Website</button>
      <button onClick={home}>Home</button>
      </div>
      <br/>
      <div className="longBreakLine"></div>
      {/* <div className="pageDivider"></div> */}
      </div>
      <br/>

 
      <div className="websiteContent">
      <img className="mainPhoto" src={website.main_photo}></img>
      <h3 className="paragraphHeading">{website.p1_heading}</h3>
      <p className="paragraphBody">{website.p1_body}</p> <br/>
      <img className="midPhoto" src={website.mid_photo1}></img>
      <img className="midPhoto" src={website.mid_photo2}></img>
      <h3 className="paragraphHeading">{website.p2_heading}</h3>
      <p className="paragraphBody">{website.p2_body}</p> <br/>
      <img className="footerPhoto" src={website.footer_photo}></img>
     
      {registrationModal? <RegistrationReminderModal toggleRegistrationModal={toggleRegistrationModal} /> : null}
      {savedMessageModal? <WebsiteSavedMessage toggleSavedMessageModal={toggleSavedMessageModal} /> : null}

      </div>
      </div>
      <div className="websiteFooter">
        <br/> <br/> <br/> <br/>
        <p> Made by {`${user.first_name}`}</p> 
        <p> © {`${website.main_heading} ${year}. All rights reserved.`}</p>
      </div>
      </div>

   </>

  );
};