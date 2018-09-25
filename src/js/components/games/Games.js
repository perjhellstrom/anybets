import React, { Component } from "react";
import PropTypes from "prop-types";
import Game from "./Game";
class Games extends Component {
  
  constructor() {
    super();
    this.state = {contestants:[{name:"Mana", race: "Protoss"},{name:"Maru", race: "Terran"}], result:[0,2]};
    console.log(this.state);
  }

  render() {
    return ( 
      <main>
        <ul>
          <Game contestants={this.state.contestants} result={this.state.result}/>
          <li>&nbsp;</li>
          <Game contestants={this.state.contestants} result={this.state.result}/>
          <li>&nbsp;</li>
          <Game contestants={this.state.contestants} result={this.state.result}/>
          <li>&nbsp;</li>
          <Game contestants={this.state.contestants} result={this.state.result}/>
          <li>&nbsp;</li>
          <Game contestants={this.state.contestants} result={this.state.result}/>
          <li>&nbsp;</li>
          <Game contestants={this.state.contestants} result={this.state.result}/>
          <li>&nbsp;</li>
          <Game contestants={this.state.contestants} result={this.state.result}/>
          <li>&nbsp;</li>
          <Game contestants={this.state.contestants} result={this.state.result}/>
        </ul>
        <ul>
          <Game contestants={this.state.contestants} result={this.state.result}/>
          <li>&nbsp;</li>
          <Game contestants={this.state.contestants} result={this.state.result}/>
          <li>&nbsp;</li>
          <Game contestants={this.state.contestants} result={this.state.result}/>
          <li>&nbsp;</li>
          <Game contestants={this.state.contestants} result={this.state.result}/>
        </ul>
        <ul>
          <Game contestants={this.state.contestants} result={this.state.result}/>
          <li>&nbsp;</li>
          <Game contestants={this.state.contestants} result={this.state.result}/>
        </ul>
        <ul>
          <Game contestants={this.state.contestants} result={this.state.result}/>
        </ul>
      </main>
    );
  }
}
/*Games.propTypes = {
  contestants: PropTypes.array.isRequired
};*/
export default Games;