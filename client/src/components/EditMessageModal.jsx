import { useNavigate } from 'react-router-dom'

export default function EditMessageModal({website, toggleEditMessageModal}) {
  const navigate = useNavigate(); 

  function handleClick() {
    toggleEditMessageModal();

  }
  
  return (
    <>
    <div className="modal savedModal">
    <button className="closeModalButton" onClick={handleClick}>x</button>
    <h2>Your website has been edited.</h2> <br/>
    <div className="navigateButton">
      <button onClick={() =>{
      navigate(`/website/${website.website_id}`)
      window.scroll(0,0)}} 
      > Go back to website </button>
     
    </div>

    </div>
    </>
  );
};