import React, { Component } from "react";
import axios from "axios";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

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
