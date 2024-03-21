
export default function LogoutButton({ setUser, user }) {
  function clearUser() {
    setUser({})
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