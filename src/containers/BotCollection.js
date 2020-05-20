import React, { Component } from "react";
import BotCard from "../components/BotCard"

class BotCollection extends Component {
  state = {
    clicked: false
  }
  //Renders All bots.
  renderBots = () => {
    return this.props.bots.map((bot, index) => <BotCard handleDischarge={this.props.handleDischarge} handleBotClick={this.props.handleBotClick} key={index} bot={bot} /> )
  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          
          {/*...and here..*/ this.renderBots()}
        </div>
      </div>
    );
  }
}

export default BotCollection;
