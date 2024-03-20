import { useState } from 'react';

export default function Register({user, setUser}) {
  const [firstName, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/users', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, username, password })
      });
      const result = await response.json();
      setUser(result)
      setUsername("");
      setPassword("");
      setFirstname("");
    
    } catch (error) {
    }

  }

  return (
    <>
    <div className="register">

      <form className="registrationForm" onSubmit={handleSubmit}>
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
       
      </form>

    </div>
    </>
  );
};
