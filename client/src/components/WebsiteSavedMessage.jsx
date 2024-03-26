import { useNavigate } from 'react-router-dom'

export default function WebsiteSavedMessage({toggleSavedMessageModal}) {
  const navigate = useNavigate(); 

  function handleClick() {
    toggleSavedMessageModal();

  }
  
  return (
    <>
    <div className="modal">
    <button className="closeModalButton" onClick={handleClick}>x</button>
    <h2>Your website has been saved.</h2> <br/>
    <div className="navigateButton">
      <button onClick={() => navigate("/websites")}
      > Go to saved Websites </button>
     
    </div>

    </div>
    </>
  );
};