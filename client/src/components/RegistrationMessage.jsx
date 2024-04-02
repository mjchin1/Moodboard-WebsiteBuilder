import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function RegistrationMessage({user, website}) {
  const navigate = useNavigate();

  function handleClick1() {
    navigate(`/website/${website.website_id}`)

  }

  function handleClick2() {
    navigate("/form")


  }

 
  
  return (
 
      <div className="registrationForm registrationMessage">
      <h2> Welcome, {`${user.first_name}`}! You are now registered. </h2>
      
      {website.website_id?
      <div>
      <button onClick={handleClick1}>Back To Your Website</button>
      <button onClick={handleClick2}>Create A New Website</button>
      </div>
      : 
      <div>
      <button onClick={handleClick2}>Create A Website</button>
      </div>}
    
  
    </div>
  
  );
};
