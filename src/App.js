import React, { Component } from "react";
import "./App.css";
import countries from "./data/countries";

import Autocomplete from "./components/Autocomplete";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Autocomplete</h1>
        <Autocomplete items={countries} />
      </div>
    );
  }
}

export default App;
