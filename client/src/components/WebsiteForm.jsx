import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

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
      console.log(result)
      setWebsite(result)
      console.log(website)
      navigate(`/website/${website.website_id}`)

    } catch (error) {
    }

  }

  return (
<>
    <div className="websiteFormCard">

      <form className="websiteForm" onSubmit={handleSubmit}>
        <h2 className="websiteFormHeading">Build Your Website</h2>
        <label>
          Main Heading:<input value={mainHeading} onChange={(event) => setMainHeading(event.target.value)} /> <br/>
        </label>
        <label>
          Subheading:<input value={subheading} onChange={(event) => setSubheading(event.target.value)} /><br/>
        </label>
        <label>
          Main Photo:<input value={mainPhoto} onChange={(event) => setMainPhoto(event.target.value)} /> <br/>
        </label>
        <label>
          Paragraph 1 Heading:<input value={p1Heading} onChange={(event) => setP1Heading(event.target.value)} /> <br/>
        </label>
        <label>
          Paragraph 1 Body:<input value={p1Body} onChange={(event) => setP1Body(event.target.value)} /> <br/>
        </label>
        <label>
          Mid-page Photo 1:<input value={midPhoto1} onChange={(event) => setMidPhoto1(event.target.value)} /><br/>
        </label>
        <label>
          Mid-Page Photo 2:<input value={midPhoto2} onChange={(event) => setMidPhoto2(event.target.value)} /> <br/>
        </label>
        <label>
          Paragraph 2 Heading:<input value={p2Heading} onChange={(event) => setP2Heading(event.target.value)} /> <br/>
        </label>
        <label>
          Paragraph 2 Body:<input value={p2Body} onChange={(event) => setP2Body(event.target.value)} /> <br/>
        </label>
        <label>
          Footer Photo:<input value={footerPhoto} onChange={(event) => setFooterPhoto(event.target.value)} /> <br/> <br/>
        </label>
        <button className="submitButton">Submit</button> 
       
      </form>

    </div>
    </>
  );
};