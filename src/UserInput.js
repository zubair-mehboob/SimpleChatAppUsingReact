import React, { Component } from "react";

const UserInput = props => {
  return (
    <div className="users-input">
      <input type="text" placeholder="Type message..." />
      <button onClick={() => props.handleClick(props.users.userName)}>
        Send
      </button>
    </div>
  );
};

export default UserInput;
