import {useNavigate} from 'react-router-dom';

export default function RegistrationReminderModal({ toggleRegistrationModal }) {
  const navigate= useNavigate()
  

  function goToRegistration() {
    navigate("/register")
  }

  function goToLogin() {
    navigate("/login")
  }


    return(
    
    <>
      <div className="modal">
      <button className="closeModalButton" onClick={toggleRegistrationModal}> x </button>
        <div className="registrationModalContent">
        <p> To save your website, you will need to register or log in. </p>

        <button onClick= { () => {
        toggleRegistrationModal()
        goToRegistration() 
      }
      }> 
        Register
      </button>

      <button onClick= { () => {
        toggleRegistrationModal()
        goToLogin() 
      }
      }> 
        Log In
      </button>

     
      </div>
      </div>

      </>
       
    );
};