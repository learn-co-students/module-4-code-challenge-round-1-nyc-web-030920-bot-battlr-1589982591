import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";

class BotsPage extends Component {
  //start here with your code for step one
  state = {
    bots: [],  //creates an empty array for fetch API
    armyBots: [],
    currentBot: {}
  }

  componentDidMount(){
    fetch("http://localhost:6001/bots")
    .then(response => response.json())
    .then(bots => this.setState({bots: bots}))
  }

  setBots = data => {
    this.setState({bots: data})
  }

  addToArmy = bot => {
    this.setState({myArmy: [...this.state.myArmy, bot]})
  }

  


  render() {
    return (  <div>
      <BotCollection bots={this.state.bots} />
      <YourBotArmy bots={this.state.bots} addToArmy={this.addToArmy} />
    </div>
  )
    }
}

export default BotsPage;
