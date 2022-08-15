import ChatContainer from "../Components/ChatContainer"
import TinderCard from "react-tinder-card";
import React, {useEffect, useState} from "react";
import axios from "axios";
import { useCookies } from "react-cookie";


const Dashboard =() =>{
    const[cookies,setCookie,removeCookie]=useCookies([]);
    const[user,setUser]=useState();
    const[genderedUsers,setgenderedUsers]=useState([]);
    const [lastDirection, setLastDirection] = useState()
    const user_id=cookies.user_id;

    const getUser =async ()=>{
        try{

           const response=await axios.get('http://localhost:8000/user', { params:
                   {
                       "user_id":user_id
                   }});
           setUser(response.data);
        }
        catch (err)
        {
            console.log(err);
        }
    }
    const getgenderedUsers=async ()=>{
        try{
            console.log("in gendered users");
            const response=await axios.get("http://localhost:8000/genderedusers",{
                params:{
                    "gender_interest":user?.gender_interest
                }});

                setgenderedUsers(response.data);
        }catch (err)
        {
            console.log(err);
        }


    }

    useEffect(()=>{
        getUser();
    },[]);
    useEffect(()=>{
        getgenderedUsers()
    },[user])
    console.log(genderedUsers);

    const updateMatches=async (matchedUserid) =>{
        try {
            const response = await axios.put("http://localhost:8000/addmatch", {user_id, matchedUserid});

            getUser();

        }catch(err)

        {
            console.log(err);
        }
    }
    const matchedUserId=user?.matches.map(({user_id})=>user_id).concat(user_id);
    const filteredMatchedUsers=genderedUsers.filter((genderedUsers)=>!matchedUserId.includes(genderedUsers.user_id));
    const swiped = (direction, swipedUserId) => {
        if(direction==="right")
        {
            updateMatches(swipedUserId)
        }
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }
    return(
        <>
            {user && <div className="dashboard" >
                <ChatContainer user={user} />
                    <div className="swipe-container">
                        <div className="card-container">
                            {filteredMatchedUsers?.map((character) =>
                                <TinderCard className='swipe' key={character.user_id} onSwipe={(dir) => swiped(dir, character.user_id)} onCardLeftScreen={() => outOfFrame(character.first_name)}>
                                    <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                                        <h3>{character.first_name}</h3>
                                        <h4>{character.about}</h4>
                                    </div>
                                </TinderCard>
                            )}
                            <div className="swipe-info">
                                {lastDirection ? <p> you swiped {lastDirection} </p>: <p></p>}
                            </div>
                        </div>
                    </div>

            </div> }

        </>
    );
}

export default Dashboard;