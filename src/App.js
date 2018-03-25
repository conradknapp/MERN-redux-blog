import React, { Component } from "react";
import axios from "axios";
import "./style.css";

class App extends Component {
  componentDidMount() {
    axios.get("http://localhost:3030/posts").then(res => {
      console.log(res.data);
    });
  }

  render() {
    return <div>App</div>;
  }
}

export default App;
