
export default function LogoutButton({ setUser, setWebsite, setSavedWebsites }) {
  function clearUser() {
 
    setUser([])
    setWebsite({})
    setSavedWebsites([])
    console.log("user cleared")
  };

  return (
    <div className="logoutButton">
      <button onClick={() => { 
        clearUser()
        }}
      > Log Out</button>
    </div>
  );
};