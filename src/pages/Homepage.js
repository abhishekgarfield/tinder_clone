import Nav from "../Components/navbar"
import { useState } from "react"
import AuthModal from "../Components/AuthModal";
import '/node_modules/font-awesome/css/font-awesome.min.css';


const Homepage =() =>{

    const authToken=false;
    const[showModal,setShowModal]=useState(false);
     const[isSignUp,setIsSignUp]=useState(false);

    const handleClick= () => {
        console.log("button clicked");
        setShowModal(true);
        setIsSignUp(true);
    }
    return(
        <>
            <div className="overlay">
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
                    {showModal && <AuthModal setShowModel={setShowModal} isSignUp={isSignUp} setIsSignUp={setIsSignUp}/>}
                </div>
            </div>
            </>
    );
}
export default Homepage;