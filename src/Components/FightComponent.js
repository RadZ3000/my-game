import React, { Component } from 'react';
import Items from './Items';

class Fight extends Component {
        state = {
            textDiv: "Fight!",
            player1Health: 500,
            player1Attack: 20,
            player2Health: 500,
            player2Attack: 15,
        }
    handleAttack = (event) => {
        this.setState({
            textDiv: "You try to strike...",
        });

        setTimeout(() => {
            this.setState({
                player2Health: this.state.player2Health - Math.floor(Math.random() * (this.state.player1Attack + 1)),
                textDiv: "You hit the opponent!"
            })
        }, 1000)
        document.getElementById("attack").disabled = true;
        document.getElementById("items").disabled = true;
    }

    handleItems = (event) => {

    }

    handleEndTurn = (event) => {
        document.getElementById("end-turn").disabled = true;
        this.setState({
            textDiv: "Opponent's Turn..."
        })

        setTimeout(() => {
            this.setState({
                player1Health: this.state.player1Health - Math.floor(Math.random() * (this.state.player2Attack + 1)),
                textDiv: "You got hit!"
            })
        }, 1000)

        setTimeout(() => {
            document.getElementById("attack").disabled = false;
            document.getElementById("items").disabled = false;
            document.getElementById("end-turn").disabled = false;
        }, 1500)

    }
    render() {
        return (
            <div id="fight-div">
                <div id="text-div"><h1>{this.state.textDiv}</h1></div>
                <div id="player1">Player 1: {this.state.player1Health} HP</div>
                <div id="player2">Player 2: {this.state.player2Health} HP</div>
                <div className='button-div'>
                    <button id="attack" onClick={this.handleAttack}>Attack</button>
                    <button id="items" onClick={this.handleItems}>Items</button>
                    <button id="end-turn" onClick={this.handleEndTurn}>End Turn</button>
                </div>
            </div>
        )
    }
}

export default Fight;