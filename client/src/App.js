import React, { Component } from "react";
import { render } from "react-dom";
import Players from './components/Players';
import axios from 'axios'

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }
 
  render() {
    return <Players/>
  }
}

render(<App />, document.getElementById("root"));



export default App

