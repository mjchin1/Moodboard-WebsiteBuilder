import RemoveSavedWebsiteButton from './RemoveSavedWebsiteButton'


export default function ConfirmRemovalModal({ toggleRemovalModal, savedWebsite, savedWebsites }) {
 
    return(
    
    <>
      <div className="modal">
        <div className="overlay"></div>
        <div className="modal-content">
        <p> Are you sure that you want to delete this website? </p>

      <RemoveSavedWebsiteButton savedWebsite={savedWebsite} savedWebsites={savedWebsites} toggleRemovalModal={toggleRemovalModal}/>
      <button onClick={toggleRemovalModal}> Back </button>
      </div>
      </div>

      </>
       
    );
};