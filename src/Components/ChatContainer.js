import Chatheader from "./Chatheader";
import ChatDisplay from "./ChatDisplay";
import MatchDisplay from "./MatchDisplay";

const ChatContainer=()=>{
    return(
        <>
            <div className="chat-container">
                <Chatheader/>
                <button className="option">matches</button>
                <button className="option">chats</button>
                <MatchDisplay/>
                <ChatDisplay/>
            </div>
        </>
    );
}
export default ChatContainer