import { useState } from 'react';

export default function Login({ setUser, user}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
      });
      const result = await response.json();
      setUser(result[0])
      console.log(user)
      setUsername("");
      setPassword("");
    } catch (error) {
    };

   function confirmUser() {
    setUser(user)
    console.log(user)
   }

  };

  return (
    <>
      <br/>
      <div className="loginPage">     
          <form className="loginForm"onSubmit={handleSubmit}>
            <h2 className="loginHeading">Log In</h2>
            <label>
              Username:<input value={username} onChange={(event) => setUsername(event.target.value)} />
            </label>
            <label>
              Password:<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </label>
            <button className="submitButton"
            >Submit</button>
          </form>
        </div>
    </>

  );
};