import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function SaveWebsiteButton({ toggleSavedMessageModal, toggleModal, user_id, website_id, setSavedWebsites, savedWebsites }) {
  const navigate = useNavigate();

  async function handleClick() {
    try {
      const response = await fetch('http://localhost:8080/api/userWebsites/', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({user_id, website_id}),
      });
      const result = await response.json();
      console.log(result);
      console.log(savedWebsites)

      if (!user_id) {
        toggleModal()
      } else {
        toggleSavedMessageModal()
      }
    } catch (error) {
    };
};

return (
  <div className="saveButton">
    <button onClick={() => {
    handleClick();
    // alert("You have saved this website")
    }}>Save Website</button>
  </div>
);
};
