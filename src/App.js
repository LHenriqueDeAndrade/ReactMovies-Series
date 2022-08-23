import React, { Component } from "react";
import Header from "./Component/Header.js";
import { GlobalStyle } from "./styles.js";

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
      </div>
    );
  }
}

export default App;
