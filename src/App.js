import React from 'react';
import ItemsObj from './Items';

window.onbeforeunload = (e) => {
  return "Are you sure you want to leave? Changes you made may not be saved!";
}

class GameApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textDiv: "Fight!",
      player1Health: 500,
      player1Attack: ItemsObj.Sword,
      player2Health: 500,
      player2Attack: ItemsObj.Spear,
      description: ""
    }
  }

  handleAttack = (event) => {
    this.setState({
      textDiv: "You try to strike..."
    });

    setTimeout(() => {
      this.setState({
        player2Health: this.state.player2Health - Math.floor(Math.random() * (this.state.player1Attack + 1)),
        textDiv: "You hit the opponent!"
      })
    }, 1000)
    document.getElementById("attack").disabled = true;
  }

  handleItems = (event) => {

  }

  handleEndTurn = (event) => {
    this.setState({
      textDiv: "Opponent's Turn..."
    })

    setTimeout(() => {
      this.setState({
        player1Health: this.state.player1Health - Math.floor(Math.random() * (this.state.player2Attack + 1)),
        textDiv: "You got hit!"
      })
    }, 1000)

    document.getElementById("attack").disabled = false;

  }

  render() {
    return (
      <div>

        <div id="text-div"><h1>{this.state.textDiv}</h1></div>

        <div id="player1">Player 1: {this.state.player1Health} HP</div>
        <div id="player2">Player 2: {this.state.player2Health} HP</div>
        <button id="attack" onClick={this.handleAttack}>Attack</button>
        <button id="items" onClick={this.handleItems}>Items</button>
        <button id="end-turn" onClick={this.handleEndTurn}>End Turn</button>
        <div id="description-paragraph">{this.state.description}</div>
      </div>
    )
  }
}

export default GameApp;