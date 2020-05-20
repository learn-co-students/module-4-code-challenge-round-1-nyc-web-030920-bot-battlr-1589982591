import React, { Component } from "react";
import BotCollection from "../containers/BotCollection"
import YourBotArmy from "../containers/YourBotArmy"

const BaseUrl = 'http://localhost:6001/bots'

class BotsPage extends Component {
  //start here with your code for step one
  state ={
    bots: [],
    army: []
  }
  componentDidMount() {
    this.fetchAllBots()
  }
  fetchAllBots = () => {
    fetch(BaseUrl)
    .then(res=> res.json())
    .then((bots) => this.setState({bots}))
  }
  handleBotClick = ( id) => {
    const addToArmy = this.state.bots.find(bot => bot.id === id)
    this.state.army.find(bot => bot.id === id) ?  null : this.setState({army: [...this.state.army, addToArmy]})
  }

  handleArmyBotClick = (id) => {
    const updatedArmy = this.state.army.filter(bot => bot.id !== id)
    this.setState({army: updatedArmy}, () => console.log(this.state.army))
  }
  handleDischarge = (id) => {
    // const delteBot = this.state.bots.find(bot => bot.id === id)
    const updatedArmy = this.state.army.filter(bot => bot.id !== id)
    fetch(BaseUrl+`/${id}`, {method: 'delete'})
    .then(res => res.json())
    .then(this.fetchAllBots())
    .then(this.setState({army: updatedArmy}))
  }
  render() {
    return <div>
      {<YourBotArmy handleDischarge={this.handleDischarge} handleArmyBotClick={this.handleArmyBotClick} army={this.state.army}/>}
    {<BotCollection handleDischarge={this.handleDischarge} handleBotClick={this.handleBotClick} bots={this.state.bots} /> }
    </div>;
  }
}

export default BotsPage;
