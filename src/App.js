import React from 'react';
import ItemsObj from './Items';

window.onbeforeunload = (e) => {
  return "Are you sure you want to leave? Changes you made may not be saved!";
}

class GameApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1Health: 500,
      player1Attack: ItemsObj.Sword,
      player2Health: 500,
      player2Attack: ItemsObj.Spear
    }
  }

  handleAttack = (event) => {
    this.setState({
      player2Health: this.state.player2Health - Math.floor(Math.random() * (this.state.player1Attack + 1))
    });
    document.getElementById("attack").disabled = true;
  }

  handleEndTurn = (event) => {
    setTimeout(() => {
      this.setState({
        player1Health: this.state.player1Health - Math.floor(Math.random() * (this.state.player2Attack + 1))
      })
    }, 500)

    document.getElementById("attack").disabled = false;

  }

  render() {
    return (
      <div>

        <h1>Fight!</h1>

        <div id="player1">Player 1: {this.state.player1Health} HP</div>
        <div id="player2">Player 2: {this.state.player2Health} HP</div>
        <button id="attack" onClick={this.handleAttack}>Attack</button>
        <button id="end-turn" onClick={this.handleEndTurn}>End Turn</button>
      </div>
    )
  }
}

export default GameApp;