import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LogoutPage() {
  const navigate = useNavigate();

  function navToHome() {
    navigate("/")
    window.scroll(0,0)
  }

  return (
 
      <div className="logoutPage">
      <h2 className="logoutMessage"> You have been logged out. </h2>
      <h2 className="logoutMessage"> Thank you for using MOODBOARD. </h2>
      <button className="logoutPageButton" onClick={navToHome}>Home</button>
      </div>
  
  );
};
