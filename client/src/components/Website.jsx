import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';


export default function Website({website, setWebsite}) {
  const {id} = useParams();
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
        console.log(website.website_id)
      } catch (error) {
      }
    }
    getWebsite();
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


  

   </>

  );
};