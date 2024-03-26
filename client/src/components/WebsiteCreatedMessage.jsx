import { useNavigate } from 'react-router-dom';

function WebsiteCreatedMessage({ website }) {
  const navigate = useNavigate(); 
  console.log(website)
  
  return (
    <>
   
    <div className="createdMessage modal">
      <h2 className="modalContent">Website created.</h2> <br/>

      <div className="navigateButton modalText">
        <button
          onClick={() => navigate(`/website/${website.website_id}`)}
        > See Website 
        </button>
      </div>

      </div>

     
    </>
  );
}

export default WebsiteCreatedMessage;