import { useNavigate } from 'react-router-dom'



export default function LogoutButton({ setUser, setWebsite, setSavedWebsites }) {
  const navigate = useNavigate()

  function clearUser() {
 
    setUser({});
    setWebsite({})
    setSavedWebsites([])
  };

  function goToLogoutPage() {
    navigate("/logout")
    window.scroll(0,0)
  }

  return (
    <div className="logoutButton">
      <button onClick={() => { 
        goToLogoutPage()
        clearUser()
        
        }}
      > Log Out</button>
    </div>
  );
};