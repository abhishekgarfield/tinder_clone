import Chatheader from "./Chatheader";
import ChatDisplay from "./ChatDisplay";
import MatchDisplay from "./MatchDisplay";

const ChatContainer=({user})=>{
    return(
        <>
            <div className="chat-container">
                <Chatheader user={user}/>
                <button className="option">matches</button>
                <button className="option">chats</button>
                <MatchDisplay/>
                <ChatDisplay/>
            </div>
        </>
    );
}
export default ChatContainer