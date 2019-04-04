import React, { Component } from "react";
const DisplayMessage = props => {
  return (
    <div className="chatbox">
      <header>
        <h1>Gup Shap Chat App</h1>
        <h2>{props.users.userName}</h2>
      </header>
      <div className="box">
        {props.messages.map((msg, index) => {
          return (
            <li
              key={index}
              style={
                msg.userName == props.users.userName
                  ? { color: "red" }
                  : { color: "blue" }
              }
            >{` ${msg.userName}:  ${msg.text}`}</li>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayMessage;
