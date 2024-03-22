import { useNavigate } from 'react-router-dom';

export default function SaveWebsiteButton({ user_id, website_id, setSavedWebsites, savedWebsites }) {
  const navigate = useNavigate();

  async function handleClick() {
    try {
      const response = await fetch('http://localhost:8080/api/userWebsites/', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({user_id, website_id}),
      });
      const result = await response.json();
      console.log(result);
      console.log(savedWebsites)

      if (!user_id) {
        navigate("/register")
      } else {
        navigate("/websites")
      }
    } catch (error) {
    };
};

return (
  <div className="saveButton">
    <button onClick={() => {
    handleClick();
    // alert("You have saved this website")
    }}>Save Website</button>
  </div>
);
};
