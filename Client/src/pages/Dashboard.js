import ChatContainer from "../Components/ChatContainer"
import TinderCard from "react-tinder-card";
import React, {useEffect, useState} from "react";
import axios from "axios";
import { useCookies } from "react-cookie";


const Dashboard =() =>{
    const[cookies,setCookie,removeCookie]=useCookies([]);
    const[user,setUser]=useState({});
    const user_id=cookies.user_id;
    console.log(user_id)

    const getUser =async ()=>{
        try{
            console.log("i m in get request");

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

    console.log("user:", user.first_name);
    useEffect(()=>{
        getUser()
    },[]);



    const characters = [
        {
            name: 'Richard Hendricks',
            url: 'https://i.imgur.com/pRlTCjP.jpg'
        },
        {
            name: 'Erlich Bachman',
            url: 'https://i.imgur.com/pRlTCjP.jpg'
        },
        {
            name: 'Monica Hall',
            url: 'https://i.imgur.com/pRlTCjP.jpg'
        },
        {
            name: 'Jared Dunn',
            url: 'https://i.imgur.com/pRlTCjP.jpg'
        },
        {
            name: 'Dinesh Chugtai',
            url: 'https://i.imgur.com/pRlTCjP.jpg'
        }
    ]
    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }
    return(
        <>
            <div className="dashboard" >
                <ChatContainer user={user} />
                    <div className="swipe-container">
                        <div className="card-container">
                            {characters.map((character) =>
                                <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                                    <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                                        <h3>{character.name}</h3>
                                    </div>
                                </TinderCard>
                            )}
                            <div className="swipe-info">
                                {lastDirection ? <p> you swiped {lastDirection} </p>: <p></p>}
                            </div>
                        </div>
                    </div>

            </div>

        </>
    );
}

export default Dashboard;