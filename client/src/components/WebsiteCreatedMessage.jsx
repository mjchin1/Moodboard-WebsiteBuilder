import { useNavigate } from 'react-router-dom'

export default function WebsiteCreatedMessage({ website }) {
  const navigate = useNavigate(); 
  
  return (
    <>
    <h2>Congratulations, your website has been created!</h2> <br/>
    <div className="navigateButton">
      <button onClick={navigate(`/websites/${website.website_id}`)}
      > Show me! </button>
    </div>
    </>
  );
};