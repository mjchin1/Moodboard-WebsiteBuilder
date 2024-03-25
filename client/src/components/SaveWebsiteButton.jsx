
export default function SaveWebsiteButton({ toggleSavedMessageModal, toggleModal, user_id, website_id, setSavedWebsites, savedWebsites }) {

  async function handleClick() {
    try {
      const response = await fetch('http://localhost:8080/api/userWebsites/', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({user_id, website_id}),
      });
      const result = await response.json();

      if (!user_id) {
        toggleModal()
      } else {
        toggleSavedMessageModal()
      }
    } catch (error) {
    };
};

return (
  <div className="saveButton">
    <button onClick={() => {
    handleClick();
    }}>Save Website</button>
  </div>
);
};
