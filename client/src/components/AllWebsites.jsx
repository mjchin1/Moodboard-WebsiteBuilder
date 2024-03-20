import { useState, useEffect } from 'react';


export default function AllWebsites({websites, setWebsites}) {
  useEffect(() => {
    async function getAllWebsites() {
      try {
        const response = await fetch("http://localhost:8080/api/websites", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        console.log(result)
        setWebsites(result);
      } catch (error) {
        throw new Error(`${error.message}`);
      }
    }
    getAllWebsites();
  }, []);

  return (
    <>
    {websites.map((website)=> (
      <div>
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
      </div>

    ))}
   </>

  );
};