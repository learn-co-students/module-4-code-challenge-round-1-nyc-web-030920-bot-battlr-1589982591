import React, { Component } from "react";
import BotCard from "../components/BotCard"

class BotCollection extends Component {
  //your code here. map each bot here

  getBots = () => {
     this.props.bots.map(bot => {<BotCard bots={this.props.bot} />})
  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          Collection of all bots
          {this.getBots()}
        </div>
      </div>
    );
  }
}

export default BotCollection;
