import React, { Component } from "react";
import ReactDOM from "react-dom";
import DisplayMessage from "./DisplayMessage";
import UserInput from "./UserInput";
import "./App.css";
class App extends Component {
  state = {
    users: [{ userName: "Zubair Mehboob" }, { userName: "Aamir Pinger" }],
    messages: [
      { userName: "Zubair Mehboob", text: "Hi Sir" },
      { userName: "Zubair Mehboob", text: "How are you?" },
      { userName: "Aamir Pinger", text: "Hello, Good n you?" }
    ]
  };

  handleClick = id => {
    let index;
    id == "Zubair Mehboob" ? (index = 0) : (index = 1);
    let inp = document.querySelectorAll("input")[index].value;
    document.querySelectorAll("input")[index].value = "";
    let messenger = id;

    if (inp == "") {
      this.setState({
        messages: this.state.messages
      });
    } else {
      let newObj = { userName: messenger, text: inp };
      let messages = [...this.state.messages, newObj];
      this.setState({
        messages
      });
    }
  };
  render() {
    return (
      <div>
        <div className="wrapper">
          {this.state.users.map((instance, index) => (
            <DisplayMessage
              key={index}
              messages={this.state.messages}
              users={instance}
            />
          ))}
        </div>
        <div className="wrapper">
          {this.state.users.map((instance, index) => (
            <UserInput
              key={index}
              handleClick={this.handleClick}
              users={instance}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
