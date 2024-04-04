
export default function SaveWebsiteButton({ toggleSavedMessageModal, toggleRegistrationModal, user_id, website_id, setSavedWebsites, savedWebsites }) {

  async function handleClick() {
    try {
      const response = await fetch('http://localhost:8080/api/userWebsites/', {
      // const response = await fetch('https://moodboardwebsitebuilder.onrender.com/api/userWebsites/', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({user_id, website_id}),
      });
      const result = await response.json();

      if (!user_id) {
        toggleRegistrationModal()
      } else {
        toggleSavedMessageModal()
      }
    } catch (error) {
    };
};

return (
  <div className="saveButton">
    <button className="websitePageButton" onClick={() => {
    handleClick();
    }}>Save Your Website</button>
  </div>
);
};
