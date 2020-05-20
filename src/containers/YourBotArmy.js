import React, { Component } from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends Component {
  //your bot army code here...
  //Renders All bots... handleBotClick uses the handleArmyBotClick function defined in app
  renderBots = () => {
    return this.props.army.map((bot, index) => (
      <BotCard
        handleDischarge={this.props.handleDischarge}
        handleBotClick={this.props.handleArmyBotClick}
        key={index}
        bot={bot}
      />
    ));
  };

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">{this.renderBots()}</div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
