import Chat from "./Chat";
import ChatInput from "./ChatInput";
import axios from "axios";
import {useEffect, useState} from "react";

const ChatDisplay=({user, clickedUser})=>{
    const[ userMessages,setUserMessages]=useState(null);
    const[clickedUserMessages,setClickedUserMessages]=useState(null);
    const userid=user?.user_id;
    const clickedUserId=clickedUser?.user_id;
    const getUserMessages= async ()=> {
        try {
            const response = await axios.get("http://localhost:8000/messages", {
                params: {
                    "userid": userid,
                    "clickedUserId": clickedUserId
                }
            })
            setUserMessages(response.data);
        }catch (err)
        {
            console.log(err);
        }
    }
    const getClickedUserMessages= async ()=> {
        try {
            const response = await axios.get("http://localhost:8000/messages", {
                params: {
                    "userid": clickedUserId,
                    "clickedUserId": userid
                }
            })
            setClickedUserMessages(response.data);
        }catch (err)
        {
            console.log(err);
        }
    }
    useEffect(()=>{
        getUserMessages()
        getClickedUserMessages()
    },[])
    const messages=[];
    userMessages?.forEach((message)=>{
        const formattedMassage={};
        formattedMassage.name=user.first_name
        formattedMassage.img=user.url
        formattedMassage.message=message.message
        formattedMassage.timestamp=message.timestamp
        messages.push(formattedMassage);

    })
    clickedUserMessages?.forEach((message)=>{
        const formattedMassage={};
        formattedMassage.name=clickedUser.first_name
        formattedMassage.img=clickedUser.url
        formattedMassage.message=message.message
        formattedMassage.timestamp=message.timestamp
        messages.push(formattedMassage);

    })
    const descOrderMessages=messages?.sort((a,b)=>{a.timestamp.localeCompare(b.timestamp)});
    return(
        <>
            <Chat descOrderMessages={descOrderMessages}/>
            <ChatInput user={user} clickedUser={clickedUser} getClickedUserMessages={getClickedUserMessages} getUserMessages={getUserMessages}/>
        </>
    );
}
export default ChatDisplay