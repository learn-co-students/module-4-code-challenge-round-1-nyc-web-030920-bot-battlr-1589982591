import React, { Component } from "react";
import BotCollection from "../containers/BotCollection"
import YourBotArmy from "../containers/YourBotArmy"
import SortBar from "../components/SortBar"

const BaseUrl = 'http://localhost:6001/bots'

class BotsPage extends Component {
  //start here with your code for step one
  state ={
    bots: [],
    army: [],
    support: false,
    medic: false,
    witch: false,
    defender: false,
    assault: false
  }
  componentDidMount() {
    this.fetchAllBots()
  }
  //populats state.bots with db data
  fetchAllBots = () => {
    fetch(BaseUrl)
    .then(res=> res.json())
    .then((bots) => this.setState({bots}))
  }
  //Handles adding bots to army when clicked inside botCollection
  handleBotClick = ( id) => {
    const addToArmy = this.state.bots.find(bot => bot.id === id)
    this.state.army.find(bot => bot.id === id) ?  null : this.setState({army: [...this.state.army, addToArmy]})
  }
  //Handles removing clicked bot form army
  handleArmyBotClick = (id) => {
    const updatedArmy = this.state.army.filter(bot => bot.id !== id)
    this.setState({army: updatedArmy}, () => console.log(this.state.army))
  }
  //handles deleting a bot from database, as well as updating state to reflect this
  handleDischarge = (id) => {
    const updatedArmy = this.state.army.filter(bot => bot.id !== id)
    fetch(BaseUrl+`/${id}`, {method: 'delete'})
    .then(res => res.json())
    .then(this.fetchAllBots())
    .then(this.setState({army: updatedArmy}))
  }
  //BONUS ______________ BONUS
  handleFilter =(e) => {
    console.log(e.target.name, !e.target.value)
    this.setState({[e.target.name]: !e.target.value}, () => console.log(this.state))
  }
  render() {
    const {medic, assault, defender, witch, support} = this.state
    return <div>
      {<YourBotArmy handleDischarge={this.handleDischarge} handleArmyBotClick={this.handleArmyBotClick} army={this.state.army}/>}
      {<SortBar medic={medic} assault={assault} defender={defender} witch={witch} support={support} handleFilter = {this.handleFilter}/>}
    {<BotCollection handleDischarge={this.handleDischarge} handleBotClick={this.handleBotClick} bots={this.state.bots} /> }
    </div>;
  }
}

export default BotsPage;
