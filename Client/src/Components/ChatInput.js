import {useState} from "react";
import axios from "axios";

const ChatInput=({getUserMessages,getClickedUserMessages,user,clickedUser})=>{
    const[textArea,setTextArea]=useState("")
    const userId=user.user_id;
    const clickedUserId=clickedUser.user_id;
    const addMessage=async()=>{
        const message={
            "to_userId":clickedUserId,
            "from_userId":userId,
            "message":textArea,
            "timestamp":new Date().toISOString()
        }
        try {
            await axios.post("http://localhost:8000/addmessage", {message})
            getUserMessages();
            getClickedUserMessages();
            setTextArea("");
        }
        catch (err)
        {
            console.log(err);
        }
    }
    return(
        <>
            <div className="chat-input">
                <textarea value={textArea} onChange={(e) => setTextArea(e.target.value)}/>
                <button className="primaryButton"  onClick={addMessage}>Submit</button>
            </div>
        </>
    );
}
export default ChatInput