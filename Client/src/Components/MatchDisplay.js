const MatchDisplay=({user})=>{
    return(
        <>
            <div className="matchesdisplay">
                <div className="users">{user.matches.map((users)=>)}</div>
            </div>
        </>
    );
}
export default MatchDisplay