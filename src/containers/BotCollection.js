import React, { Component } from "react";
import BotCard from "../components/BotCard"

class BotCollection extends Component {
  //your code here
  renderBots = () => {
    return this.props.bots.map((bot, index) => <BotCard handleBotClick={this.props.handleBotClick} key={index} bot={bot} /> )
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
