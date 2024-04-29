import RemoveSavedWebsiteButton from './RemoveSavedWebsiteButton';


export default function ConfirmRemovalModal({ toggleRemovalModal, savedWebsite, savedWebsites }) {
 
    return(
    
    <>
      <div className="modal">
        <div className="overlay"></div>
        <div className="confirmRemovalModalContent">
        <p> Are you sure that you want to delete this website? </p>
      <div className="removeButton">
      <RemoveSavedWebsiteButton savedWebsite={savedWebsite} savedWebsites={savedWebsites} toggleRemovalModal={toggleRemovalModal}/>
      <button onClick={toggleRemovalModal}> Cancel </button>
      </div>
      </div>
      </div>

      </>
       
    );
};