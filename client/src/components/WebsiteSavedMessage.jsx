import { useNavigate } from 'react-router-dom'

export default function WebsiteSavedMessage({toggleSavedMessageModal}) {
  const navigate = useNavigate(); 
  
  return (
    <>
    <div className="modal">
    <h2>Your website has been saved.</h2> <br/>
    <div className="navigateButton">
      <button onClick={() => navigate("/websites")}
      > Go to saved Websites </button>
      <button onClick={toggleSavedMessageModal}>Close</button>
    </div>

    </div>
    </>
  );
};