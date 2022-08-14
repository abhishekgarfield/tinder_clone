const MatchDisplay=({matches})=>{
    return(
        <>
            <div className="matchesdisplay">
                <div className="users">{matches.map((user)=>user.user_id+" ")}</div>
            </div>
        </>
    );
}
export default MatchDisplay