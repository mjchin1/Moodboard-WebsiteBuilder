import {useNavigate} from 'react-router-dom';

export default function RegistrationReminderModal({ toggleModal }) {
  const navigate= useNavigate()
  

  function goToRegistration() {
    navigate("/register")
  }
    return(
    
    <>
      <div className="modal">
        <div className="overlay"></div>
        <div className="modal-content">
        <p> To save your website, you will need to create an account. </p>

        <button onClick= { () => {
        toggleModal()
        console.log("buttonClicked")
        goToRegistration() 
      }
      }> 
        Register
      </button>
      
      <button onClick={toggleModal}> Close </button>
      </div>
      </div>

      </>
       
    );
};