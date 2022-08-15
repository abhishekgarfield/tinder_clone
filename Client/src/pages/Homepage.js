import Nav from "../Components/navbar"
import { useState } from "react"
import AuthModal from "../Components/AuthModal";
import Footer from "../Components/Footer";
import{useCookies} from "react-cookie";


const Homepage =() =>{

    const[cookies,setCookie,removeCookie]=useCookies();
    const authToken=cookies.AuthToken;
    const[showModal,setShowModal]=useState(false);
     const[isSignUp,setIsSignUp]=useState(true);

    const handleClick= () => {
        setShowModal(true);
        setIsSignUp(true);
        if(authToken) {
            removeCookie("user_id", cookies.user_id);
            removeCookie("AuthToken", cookies.AuthToken);
            window.location.reload();
        }

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
                        { authToken ? "Signout" : "Create Account"}
                    </button>

                    {showModal && <AuthModal setShowModel={setShowModal} isSignUp={isSignUp} authToken={authToken}/>}
                </div>
            </div>
            {!(showModal) && <Footer/>}

            </>
    );
}
export default Homepage;