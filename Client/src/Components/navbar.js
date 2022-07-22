import colorLogo from "../images/colorLogo.png"
import whiteLogo from "../images/whiteLogo.png"
import {Link} from "react-router-dom";


const Nav = ({minimal , authToken , setShowModal ,showModel ,setIsSignUp}) => {
    const handleClick=()=>{
        setShowModal(true);
        setIsSignUp(false);
    }
    return(
        <nav>
            <div className="left-nav-container">
                <div className="logoContainer">
                    <Link to="/">
                        <img className="logo" src={minimal ? colorLogo : whiteLogo}/>
                    </Link>

                </div>
                {!minimal && <ul>
                    <li>Products</li>
                    <li>Learn</li>
                    <li>Safety</li>
                    <li>Support</li>
                    <li>Download</li>
                </ul>}
            </div>
            { !authToken && !minimal &&
                <button onClick={handleClick} className="navButton"
                disabled={showModel}>Log in</button>}

        </nav>
    );
}

export default Nav;