import { useState } from 'react';
import { Link } from 'react-router-dom';
import RegistrationMessage from './RegistrationMessage';

export default function Register({user, website, setUser}) {
  const [firstName, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      // const response = await fetch('http://localhost:8080/api/users', {
      const response = await fetch('https://moodboard-backend.onrender.com/api/users', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, username, password })
      });
      const result = await response.json();
      setUser(result);
      setUsername("");
      setPassword("");
      setFirstname("");
    
    } catch (error) {
    }
  }

  return (
    <>
     { !user.user_id? 
    <div className="register">
   

   

      <form className="registrationForm" onSubmit={handleSubmit}>

      <h2 className="registrationHeading">Register</h2>
        <label>
          First Name:<input value={firstName} onChange={(event) => setFirstname(event.target.value)} /> <br/>
        </label>
        <label>
          Username:<input value={username} onChange={(event) => setUsername(event.target.value)} /> <br/>
        </label>
        <label>
          Password:<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} /> <br/> <br/>
        </label>
        <button className="submitButton">Submit</button> 
        <h3 className="registrationHeading"> Already have an account? Log in{<Link to = "/login">here</Link>}.</h3>
       
      </form>

  
    </div>
      : 
      <RegistrationMessage user={user} website={website}/>
     } 
    </>
  );
};
