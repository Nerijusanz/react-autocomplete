import React, { Component } from "react";
import "./App.css";

import Autocomplete from "./components/Autocomplete";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Autocomplete />
      </div>
    );
  }
}

export default App;
