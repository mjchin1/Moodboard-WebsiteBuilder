import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WebsiteCreatedMessage from './WebsiteCreatedMessage';

export default function WebsiteForm ({website, setWebsite}) {
  const [mainHeading, setMainHeading] = useState("");
  const [subheading, setSubheading] = useState("");
  const [mainPhoto, setMainPhoto] = useState("");
  const [p1Heading, setP1Heading] = useState("");
  const [p1Body, setP1Body] = useState("");
  const [midPhoto1, setMidPhoto1] = useState("");
  const [midPhoto2, setMidPhoto2] = useState("");
  const [p2Heading, setP2Heading] = useState("");
  const [p2Body, setP2Body] = useState("");
  const [footerPhoto, setFooterPhoto] = useState("");
  const [createdMessageModal, setCreatedMessageModal] = useState(false);
  const navigate = useNavigate();

  function toggleCreatedMessageModal() {
    setCreatedMessageModal(!createdMessageModal)
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/websites', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          mainHeading,
          subheading,
          mainPhoto,
          p1Heading,
          p1Body,
          midPhoto1,
          midPhoto2,
          p2Heading,
          p2Body, 
          footerPhoto
        })
      });
      const result = await response.json();
      setMainHeading("");
      setSubheading("");
      setMainPhoto("");
      setP1Heading("");
      setP1Body("");
      setMidPhoto1("");
      setMidPhoto2("");
      setP2Heading("");
      setP2Body("");
      setFooterPhoto("");
      setWebsite(result)
      toggleCreatedMessageModal();



    } catch (error) {
    }

  }

  return (
<>
    <div className="websiteFormCard">
      <div className="websiteFormBorder">
      <h2 className="websiteFormHeading">Build Your Website</h2>
      <div className="tinyBreakLine"></div> <br/>

      <form className="websiteForm" onSubmit={handleSubmit}>
        
        <label>
         What would you like your website to be called?
          <br/> <input value={mainHeading} onChange={(event) => setMainHeading(event.target.value)} /> <br/>
        </label> <br/>

        <label>
          Provide a tagline or a short sentence that describes what your website does.
          <br/><input value={subheading} onChange={(event) => setSubheading(event.target.value)} /><br/>
        </label> <br/>

        <label>
          Provide a title for your opening paragraph.  
          <br/> <input value={p1Heading} placeholder="Example: About Me"onChange={(event) => setP1Heading(event.target.value)} /> <br/>
        </label> <br/> 

        <label>
          Write your opening paragraph. 
          <br/><textarea placeholder="Example: I'm passionate about building web applications because..." value={p1Body} onChange={(event) => setP1Body(event.target.value)} /> <br/>
        </label> <br/>


        <label> 
          Provide a title for your closing paragraph. <br/>
          <input value={p2Heading} placeholder="Example: My Upcoming Projects" onChange={(event) => setP2Heading(event.target.value)} /> <br/>
        </label> <br/>

        <label>
          Write your closing paragraph.<br/>
          <textarea placeholder="Example: Thank you for checking out my work. Please be on the lookout for what's coming next..." value={p2Body} onChange={(event) => setP2Body(event.target.value)} /> <br/>
        </label> <br/>



        <p className="formText"> Now, let's choose 4 photos that you would like to appear on your website. These should ideally be high-resolution photos with a landscape orientation. Upload your photos by copying and pasting the image URL from a website such as Google Images. </p> <br/>

        <label>
          Photo 1: <input value={mainPhoto} onChange={(event) => setMainPhoto(event.target.value)} /> <br/>
        </label>

        <label>
          Photo 2: <input value={midPhoto1} onChange={(event) => setMidPhoto1(event.target.value)} /><br/>
        </label>

        <label>
         Photo 3: <input value={midPhoto2} onChange={(event) => setMidPhoto2(event.target.value)} /> <br/>
        </label>

        <label>
         Photo 4: <input value={footerPhoto} onChange={(event) => setFooterPhoto(event.target.value)} /> <br/>
        </label> <br/>

        <p className="formText"> Let's see what you've created!</p> <br/>
    

        <button className="submitButton">Create My Website</button> 

        {createdMessageModal? <WebsiteCreatedMessage website= {website} toggleCreatedMessageModal={toggleCreatedMessageModal} /> : null}
       
      </form>
      </div>

    </div>
    </>
  );
};