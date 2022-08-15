import {useState} from "react";

const ChatInput=({getUserMessages,getClickedUserMessages,user,clickedUser})=>{
    const[textArea,setTextArea]=useState("")

    return(
        <>
            <div className="chat-input">
                <textarea value={textArea} onChange={(e) => setTextArea(e.target.value)}/>
                <button className="primaryButton">Submit</button>
            </div>
        </>
    );
}
export default ChatInput