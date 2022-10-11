import { useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";

const Chatheader=({user})=>{
    const navigate=useNavigate();
    const[cookies,setCookie,removeCookie]=useCookies([]);
    const handleClick=(e)=>
    {
        e.preventDefault();
        removeCookie("user_id",cookies.user_id);
        removeCookie("AuthToken",cookies.AuthToken);

        navigate("/");
        window.location.reload();
    }
    return(
        <>
            <div className="chat-container-header">
                <div className="profile">
                     <div className="img-container">
                        <img src={user.url} alt={"photo of" + user.first_name}/>
                    </div>
                </div>
                <h3>{user.first_name}</h3>
                <i className="log-out-icon fa fa-sign-out" onClick={handleClick}></i>
            </div>
        </>
    );
}
export default Chatheader