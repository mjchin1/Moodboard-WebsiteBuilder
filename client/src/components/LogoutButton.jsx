
export default function LogoutButton({ setUser, user }) {
  function clearUser() {
 
    setUser([])
    console.log(user)
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