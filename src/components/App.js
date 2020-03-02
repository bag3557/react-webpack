import React, { Component } from "react";
import Logo from "./reactjs.png";
class App extends Component {
  render() {
    return (
      <div>
        <h1 className="hello">My React App</h1>
        <img src={Logo} />
      </div>
    );
  }
}
export default App;
