import { useNavigate } from 'react-router-dom'

export default function WebsiteSavedMessage() {
  const navigate = useNavigate(); 
  
  return (
    <>
    <h2>Your website has been saved.</h2> <br/>
    <div className="navigateButton">
      <button onClick={navigate("/websites")}
      > Go to saved Websites </button>
    </div>
    </>
  );
};