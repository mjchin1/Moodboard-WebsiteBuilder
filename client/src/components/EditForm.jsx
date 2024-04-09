import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EditMessageModal from './EditMessageModal';

export default function WebsiteForm ({website, setWebsite}) {
  const [mainHeading, setMainHeading] = useState(website.main_heading);
  const [subheading, setSubheading] = useState(website.subheading);
  const [mainPhoto, setMainPhoto] = useState(website.main_photo);
  const [p1Heading, setP1Heading] = useState(website.p1_heading);
  const [p1Body, setP1Body] = useState(website.p1_body);
  const [midPhoto1, setMidPhoto1] = useState(website.mid_photo1);
  const [midPhoto2, setMidPhoto2] = useState(website.mid_photo2);
  const [p2Heading, setP2Heading] = useState(website.p2_heading);
  const [p2Body, setP2Body] = useState(website.p2_body);
  const [footerPhoto, setFooterPhoto] = useState(website.footer_photo);
  const [editMessageModal, setEditMessageModal] = useState(false);
  const navigate = useNavigate();

  function toggleEditMessageModal() {
    setEditMessageModal(!editMessageModal)
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/websites/${website.website_id}`, {
      // const response = await fetch(`https://moodboardwebsitebuilder.onrender.com/api/websites/${website.website_id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          main_heading: mainHeading,
          subheading: subheading,
          main_photo: mainPhoto,
          p1_heading: p1Heading,
          p1_body: p1Body,
          mid_photo1: midPhoto1,
          mid_photo2: midPhoto2,
          p2_heading: p2Heading,
          p2_body: p2Body, 
          footer_photo: footerPhoto
        })
      });
      const result = await response.json();
      setWebsite(result)
      toggleEditMessageModal();



    } catch (error) {
    }

  }

  return (
<>
    <div className="websiteFormCard">
      
      <div className="websiteFormBorder">
        <br/> <br/>
      <h2 className="websiteFormHeading">Edit Website</h2>
      <div className="tinyBreakLine"></div> <br/>
      <p className="formText">All fields are required.</p> <br/>

      <form className="websiteForm" onSubmit={handleSubmit}>
        
        <label>
         What would you like your website to be called?
          <br/> <input value={mainHeading} onChange={(event) => setMainHeading(event.target.value)} required /> <br/>
        </label> <br/>

        <label>
          Provide a tagline or a short sentence that describes what your website does.
          <br/><input value={subheading} onChange={(event) => setSubheading(event.target.value)} required /><br/>
        </label> <br/>

        <label>
          Provide a title for your opening paragraph.
          <br/> <input value={p1Heading} placeholder="Example: About Me"onChange={(event) => setP1Heading(event.target.value)} required /> <br/>
        </label> <br/> 

        <label>
          Write your opening paragraph. 
          <br/><textarea placeholder="Example: Some things that I'm passionate about include..." value={p1Body} onChange={(event) => setP1Body(event.target.value)} required /> <br/>
        </label> <br/>


        <label> 
          Provide a title for your closing paragraph. <br/>
          <input value={p2Heading} placeholder="Example: My Upcoming Projects" onChange={(event) => setP2Heading(event.target.value)} required /> <br/>
        </label> <br/>

        <label>
          Write your closing paragraph.<br/>
          <textarea placeholder="Example: Thank you for checking out my work. Please be on the lookout for what's coming next..." value={p2Body} onChange={(event) => setP2Body(event.target.value)} required /> <br/>
        </label> <br/>



        <p className="formText"> Now let's choose 4 high-resolution, landscape-oriented photos that you would like to appear on your website. Upload your photos by copying and pasting the image URL from a website such as Google Images. </p> <br/>

        <label>
          Photo 1: <input value={mainPhoto} onChange={(event) => setMainPhoto(event.target.value)} required /> <br/>
        </label>

        <label>
          Photo 2: <input value={midPhoto1} onChange={(event) => setMidPhoto1(event.target.value)} required /><br/>
        </label>

        <label>
         Photo 3: <input value={midPhoto2} onChange={(event) => setMidPhoto2(event.target.value)} required /> <br/>
        </label>

        <label>
         Photo 4: <input value={footerPhoto} onChange={(event) => setFooterPhoto(event.target.value)} required /> <br/>
        </label> <br/>
    
        <button className="createWebsiteButton">Edit</button> <br/> <br/>

        {editMessageModal? <EditMessageModal website= {website} toggleEditMessageModal={toggleEditMessageModal} /> : null}
       
      </form>
      </div>

    </div>
    </>
  );
};