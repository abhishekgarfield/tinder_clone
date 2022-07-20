import colorLogo from "../images/colorLogo.png"
import whiteLogo from "../images/whiteLogo.png"
import AuthModal from "./AuthModal";
import back from "../images/back.webp";

const Nav = ({minimal , authToken , setShowModal ,showModel ,setIsSignUp}) => {
    const handleClick=()=>{
        setShowModal(true);
        setIsSignUp(false);
    }
    return(
        <nav>
            <div className="logoContainer">
                <img className="logo" src={minimal ? colorLogo : whiteLogo}/>
            </div>
            { !authToken && !minimal &&
                <button onClick={handleClick} className="navButton"
                disabled={showModel}>Log in</button>}

        </nav>
    );
}

export default Nav;