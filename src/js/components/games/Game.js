import React, { Component } from "react";
import PropTypes from "prop-types";
class Game extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {hover:false, ContestantOne: this.props.contestants[0] || "TBD", ContestantTwo: this.props.contestants[1] || "TBD", result:this.props.result || ["",""]};
  }
  handleMouseHover(e){
    this.setState({hover:!this.state.hover});
  }
  render() {
    return (
      <React.Fragment>
        <li className="game game-top winner">{this.state.ContestantOne.name} <span>{this.state.result[0]}</span></li>
        <li>&nbsp;</li>
        <li className="game game-bottom "  onMouseEnter={this.handleMouseHover}
      onMouseLeave={this.handleMouseHover}>{this.state.ContestantTwo.name} <span>{this.state.result[1]}</span><p style={{display: this.state.hover?"block":"none"}}>LUUL</p></li>
        
      </React.Fragment>
    );
  }
}
Game.propTypes = {
  contestants: PropTypes.array.isRequired,
  result: PropTypes.array.isRequired
};
export default Game;