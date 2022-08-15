import Chatheader from "./Chatheader";
import ChatDisplay from "./ChatDisplay";
import MatchDisplay from "./MatchDisplay";
import {useState} from "react";

const ChatContainer=({user})=>{
    const[clickedUser,setClickedUser]=useState(null);
    return(
        <>
            <div className="chat-container">
                <Chatheader user={user}/>
                <div >
                    <button className="option" onClick={()=>setClickedUser(null)}>matches</button>
                    <button className="option" disabled={!clickedUser}>chats</button>
                </div>
                {!clickedUser &&<MatchDisplay matches={user.matches} setClickedUser={setClickedUser}/>}
                {clickedUser && <ChatDisplay user={user} clickedUser={clickedUser}/>}
            </div>
        </>
    );
}
export default ChatContainer