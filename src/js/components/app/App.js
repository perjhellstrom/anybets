import React, { Component } from "react";
import Games from "../games/Games";
class App extends Component {
  constructor() {
    super();
  }
  render() {

    return (
      <div>
        <Games />
      </div>
    );
  }
}
export default App;