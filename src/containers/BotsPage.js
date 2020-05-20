import React, { Component } from "react";

class BotsPage extends Component {
  //start here with your code for step one
  state = {
    bots: []  //creates an empty array for fetch API
  }

  componentDidMount(){
    fetch("http://localhost:6001/bots")
    .then(response => response.json())
    .then(bots => this.setState({bots: bots}))
    console.log(this.state.bots)
  }


  render() {
    return (  <div>
      <BotCollection bots={this.state.bots} />
    </div>
  )
    }
}

export default BotsPage;
