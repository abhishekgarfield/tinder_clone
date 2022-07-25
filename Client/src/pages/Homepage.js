import Nav from "../Components/navbar"
import { useState } from "react"
import AuthModal from "../Components/AuthModal";
import '/node_modules/font-awesome/css/font-awesome.min.css';
import Footer from "../Components/Footer";


const Homepage =() =>{

    const authToken=true;
    const[showModal,setShowModal]=useState(false);
     const[isSignUp,setIsSignUp]=useState(false);

    const handleClick= () => {
        console.log("button clicked");
        setShowModal(true);
        setIsSignUp(true);
    }
    return(
        <>
            <div className="overlay" >
                <Nav minimal={false}
                     authToken={authToken}
                     setShowModal={setShowModal}
                     showModel={showModal}
                     setIsSignUp={setIsSignUp}
                />
                <div className="Home">
                    <h1>Start Something Epic.</h1>
                    <button className="primaryButton" onClick={handleClick}>
                        { authToken ? "Login" : "Create Account"}
                    </button>

                    {showModal && <AuthModal setShowModel={setShowModal} isSignUp={isSignUp} authToken={authToken}/>}
                </div>
            </div>
            {!(showModal) && <Footer/>}

            </>
    );
}
export default Homepage;