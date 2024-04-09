import { useNavigate } from 'react-router-dom';

function WebsiteCreatedMessage({ website }) {
  const navigate = useNavigate(); 
  console.log(website)
  
  return (
    <>
   
    <div className="createdMessage modal">
      <h2 className="modalContent">Your website has been created.</h2> <br/>

      <div className="navigateButton modalText">
        <button className="modalButton"
          onClick={() => {
            navigate(`/website/${website.website_id}`)
            window.scrollTo(0,0)}}
        > See Website 
        </button>
      </div>

      </div>

     
    </>
  );
}

export default WebsiteCreatedMessage;