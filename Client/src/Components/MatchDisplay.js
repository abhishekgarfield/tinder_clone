import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

const MatchDisplay = ({ matches, setClickedUser }) => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [matchedProfiles, setMatchProfile] = useState(null);
  const matchedUserids = matches?.map(({ user_id }) => user_id);
  const userID = cookies.user_id;
  const getMatches = async () => {
    try {
      const response = await axios.get("https://tindergarfield.herokuapp.com/users", {
        params: {
          userids: matchedUserids,
        },
      });
      setMatchProfile(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMatches();
  }, [matches]);
  const filteredMatchedProfile = matchedProfiles?.filter((matchedprofile) =>
    matchedprofile.matches.some((profile) => profile.user_id == userID)
  );

  return (
    <>
      <div className="matchesdisplay">
        <div>
          {" "}
          {filteredMatchedProfile?.map((users, _index) => (
            <div
              key={_index}
              className="match-card"
              onClick={() => setClickedUser(users)}
            >
              <div className="img-container">
                <img src={users?.url} alt={users?.first_name} />
              </div>
              <h3>{users.first_name}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default MatchDisplay;
