import { useNavigate } from 'react-router-dom';

function WebsiteCreatedMessage({ website }) {
  const navigate = useNavigate(); 
  
  return (
    <>
      <h2>Congratulations, your website has been created!</h2> <br/>
      <div className="navigateButton">
        <button
          onClick={() => navigate(`/website/${website.website_id}`)}
        > Show me! 
        </button>
      </div>
    </>
  );
}

export default WebsiteCreatedMessage;