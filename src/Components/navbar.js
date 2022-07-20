import colorLogo from "../images/colorLogo.png"
import whiteLogo from "../images/whiteLogo.png"
import AuthModal from "./AuthModal";

const Nav = ({minimal , authToken , setShowModal ,showModel }) => {
    const handleClick=()=>{
        setShowModal(true);
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