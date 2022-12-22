import React, { useState } from "react";
import SearchUser from "./SearchUser";

function UserCard(props) {
  const [showPrompt, setShowPrompt] = useState(false);

  const [foundUser, setfoundUser] = useState(false);
  const [user, setUser] = useState({ username: "", name: "", picture: "" });

  if (foundUser == true) {
    return (
      <div className="userCard" onClick={(e) => {
        props.setPercentaje(0);
        setfoundUser(false)
        props.setFound(false)}}>
        <div className="pfp">
          <img src={"http://localhost:3000/proxy?url=" + user.picture} alt="" />
        </div>
        <div className="pInfo">
          <h4>{"@" + user.username}</h4>
          <h3>{user.name}</h3>
        </div>
        <SearchUser
          display={showPrompt}
          setFound={setfoundUser}
          setUser={setUser}
          setDisplay={setShowPrompt}
        />
      </div>
    );
  } else {
    return (
      <div className="userCardAdd">
        <div className="container" onClick={(e) => setShowPrompt(!showPrompt)}>
          <img src="./src/assets/cross.svg" alt="" />
        </div>
        <SearchUser
          display={showPrompt}
          setFound={setfoundUser}
          setFoundOut={props.setFound}
          setUser={setUser}
          setDisplay={setShowPrompt}
        />
      </div>
    );
  }
}

export default UserCard;
