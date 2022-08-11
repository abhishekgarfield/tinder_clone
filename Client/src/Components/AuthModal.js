import {useState} from "react";
import tinder from "../images/tinder.png";
import playstore2 from "../images/playstore2.jpg";
import appstore from "../images/appstore.webp";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const AuthModal =({setShowModel , isSignUp , authToken }) =>
{

    const [error,setError]=useState(null);
    const [email, setEmail]=useState(null);
    const[password,setPassword]=useState(null);
    const[confirmPassword,setConfirmPassword]=useState(null);
    const[cookies,setCookie, removeCookie]=useCookies();
    let navigate= useNavigate();
    const handleClick =()=> {
        setShowModel(false);

    }
    const handleSubmit = async (e) => {
        e.preventDefault()
            try {
                if (isSignUp && !(password === confirmPassword)) {
                    setError("Passwords need to match");
                    return;
                }
                const response = await axios.post(`http://localhost:8000/${isSignUp ? `signup` : `login`}`, {email, password});
                const success = response.status === 201;
                setCookie("user_id",response.data.user_id);
                setCookie("AuthToken",response.data.token);

                const userError = response.status === 206;
                if (success && isSignUp) {
                    navigate("/onboard");
                }
                if(success && !isSignUp)
                {
                    console.log("before navigate");
                    navigate("/dashboard");
                    console.log("after navigate");
                }
                if (userError && isSignUp) {
                    setError("User already exists");
                }
                if (userError && !isSignUp) {
                    setError("Wrong credentials");
                }
                console.log("after dashboard")
            } catch (error) {
                console.log(error);
            }

    }
    return(
        <>
            <div className="cont1">
                <div  className="auth-modal">
                    <div onClick={handleClick} className="close-icon">
                        <i className="fa fa-remove"></i>
                    </div>
                    <img  src={tinder} alt="logo"/>
                    <h2>{(isSignUp && !authToken) ? "Create Account" : "Login"}</h2>
                    <p>By clicking login you agree to our Terms.Learn
                        how we process your data in our Privacy Policy.
                        and Cookie Policy
                    </p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="email"
                            required={true}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="password"
                            required={true}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        {isSignUp && (!authToken && <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="confirmPassword"
                            required={true}
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                        />)}
                        <input
                            type="submit"
                            className="sec-button"
                        />
                        <p className="NVN">{error}</p>
                    </form>
                    <hr/>
                    <h2>GET THE APP</h2>
                    <div className="form-download">
                        <img src ={ playstore2 } alt="playstore" />
                        <img src= { appstore } alt="appstore" />
                    </div>
                 </div>
            </div>
        </>
    );
}

export default AuthModal;