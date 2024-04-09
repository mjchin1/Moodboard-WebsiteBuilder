import { useNavigate } from 'react-router-dom'

export default function WebsiteSavedMessage({toggleSavedMessageModal}) {
  const navigate = useNavigate(); 

  function handleClick() {
    toggleSavedMessageModal();

  }
  
  return (
    <>
    <div className="modal savedModal">
    <button className="closeModalButton" onClick={handleClick}>x</button>
    <h2 className="savedModalContent">Your website has been saved.</h2> <br/>
    <div>
      <button className="modalButton" onClick={() => navigate("/websites")}
      > Go To Saved Websites </button>
     
    </div>

    </div>
    </>
  );
};