import {useEffect, useState} from "react";
import axios from "axios";

const MatchDisplay=({matches , setClickedUser})=>{
    const [matchedProfiles,setMatchProfile]=useState(null);
    const matchedUserids=matches.map(({user_id})=>user_id);
    const getMatches=async ()=> {
        try {
            const response = await axios.get("http://localhost:8000/users", {
                params: {
                    "userids": matchedUserids
                }
            })
            setMatchProfile(response.data);
        }
        catch (err)
        {
            console.log(err);
        }
    }
    useEffect(()=>{
        getMatches()
    },[]);
    return(
        <>
            <div className="matchesdisplay">
                <div > {matchedProfiles?.map((users,_index) => (
                    <div key={_index} className="match-card" onClick={()=>setClickedUser(users)}>
                        <div className="img-container">
                            <img src={users?.url} alt={users?.first_name}/>
                        </div>
                        <h3>{users.first_name}</h3>
                    </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default MatchDisplay