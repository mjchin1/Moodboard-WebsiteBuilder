

export default function RemoveSavedWebsiteButton({ toggleRemovalModal, savedWebsite, savedWebsites, setSavedWebsites }) {

  async function handleClick() {
    try {
      // const response = await fetch(`http://localhost:8080/api/userWebsites/${savedWebsite.user_website_id}`, {
      const response = await fetch(`https://moodboard-backend.onrender.com/api/userWebsites/${savedWebsite.user_website_id}`, {
        
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
     
      setSavedWebsites(savedWebsites.filter((savedWebsite) => savedWebsite.user_website_id !== result[0].user_website_id));
      
    } catch (error) {
    }
  }
  return (
    <div className="removeButton">
      <br/>
      <button onClick={() => {
        handleClick();
        toggleRemovalModal();
      }}>Delete</button>
    </div>
  );
};