import React, { Component } from "react";
import BotCard from "../components/BotCard"
import BotSpecs from "../components/BotSpecs"

class BotCollection extends Component {
  state ={
    currentBot: {}
  }

 setCurrentBot = bot => {
   this.setState({currentBot: bot})
 }

 clearCurrentBot = () => {
   this.setState({currentBot: {}})
 }


renderBots = () => {
  if (!this.state.currentBot.id) {
    return (
      <div className="row">
      Collection of all bots
      {this.props.bots.map(bot => (<BotCard bot={bot} viewBot={this.setCurrentBot} key={bot.id} />
        ))}
      </div>
    )
  }else {

  return (
   <BotSpecs 
    bot={this.state.currentBot}
    chosenOne={this.state.addToArmy}
    goBack={this.clearCurrentBot}
    addToArmy={this.props.addToArmy} />
    )
  }
}

render() {
  return <div className="ui four column grid">{this.renderBots()}</div>
  }
}

export default BotCollection;
