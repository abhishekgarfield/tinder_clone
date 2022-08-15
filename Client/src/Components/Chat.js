const Chat=({descOrderMessages})=>{
    return(
        <>
            <div className="chat-display">
                {descOrderMessages.map((messages, _index) => (
                    <div key={_index}>
                        <div className="chat-message-header">
                            <div className="img-container">
                                <img src={messages.img} alt={messages.name}/>
                            </div>
                            <p>{messages.name}</p>
                        </div>
                        <p>{messages.message}</p>
                    </div>
                ))}
            </div>

        </>
    );
}
export default Chat