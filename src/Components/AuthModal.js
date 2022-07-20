import {useState} from "react";
import tinder from "../images/tinder.png";
import playstore2 from "../images/playstore2.jpg";
import appstore from "../images/appstore.webp";

const AuthModal =({setShowModel , isSignUp }) =>
{

    const [error,setError]=useState(null);
    const [email, setEmail]=useState(null);
    const[password,setPassword]=useState(null);
    const[confirmPassword,setConfirmPassword]=useState(null);
    const handleClick =()=> {
        setShowModel(false);

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        try{
            if(isSignUp && (password==confirmPassword)) {
                setError("Passwords need to match");
            }
            console.log("make request to database");
        }
        catch (error){
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
                    <img  src={tinder}/>
                    <h2>{isSignUp ? "Create Account" : "Login"}</h2>
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
                        {isSignUp && <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="confirmPassword"
                            required={true}
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                        />}
                        <input
                            type="submit"
                            className="sec-button"
                        />
                        <p className="NVN">{error}</p>
                    </form>
                    <hr/>
                    <h2>GET THE APP</h2>
                    <div className="form-download">
                        <img src ={ playstore2 } />
                        <img src= { appstore } />
                    </div>
                 </div>
            </div>
        </>
    );
}

export default AuthModal;