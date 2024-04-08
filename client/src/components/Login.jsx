import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ setUser, user, website}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/users/login", {
      // const response = await fetch("https://moodboardwebsitebuilder.onrender.com/api/users/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
      });
      const result = await response.json();
      setUser(result)
      setUsername("");
      setPassword("");

    } catch (error) {
    };

  };

  return (
    <>
      <div className="loginPage"> 
      { !user.user_id ? 
        
          <form className="loginForm"onSubmit={handleSubmit}>
            <h2 className="loginHeading">Log In</h2>
            <label>
              Username: <input value={username} onChange={(event) => setUsername(event.target.value)} />
            </label> <br/>
            <label>
              Password: <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </label> <br/> <br/>
            <button className="submitButton"
            >Submit</button> <br/>
          </form>
     
        
        : <h2 className="loginHeading"> Welcome, {`${user.first_name}`}! You have been logged in. </h2> 

      }
      <br/>
      <div>
      {user.user_id && website.website_id? 
      <>
      <button className="loginPageButton" onClick= {()=> {
        navigate(`/website/${website.website_id}`)
      }}>Back To My Website</button>

      <button className="loginPageButton" onClick= {()=> {
        navigate("/websites")
      }}>Saved Websites</button>

      <button className="loginPageButton" onClick={()=>{
        navigate("/form")
      }}>Build A Website</button>
      </>
      : null
      
      }
    </div>

    <div >
      {user.user_id && !website.website_id? 
      <>
      <button className="loginPageButton" onClick= {()=> {
        navigate("/websites")
      }}>Saved Websites</button>

      <button className="loginPageButton" onClick={()=>{
        navigate("/form")
      }}>Build A Website</button>
      </>
      : null
      
      }
    </div>

      </div>
    </>

  );
};