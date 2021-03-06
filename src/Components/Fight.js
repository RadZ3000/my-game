import React, { Component } from 'react';
import Items from './Items';
import DataObj from './Data';
import './../App.css';

class Fight extends Component {
    state = {
        renderView: 0,
        textDiv: "Fight!",
        player1Health: DataObj.player1Health,
        player1Attack: DataObj.player1Attack,
        player2Health: DataObj.player2Health,
        player2Attack: 15,
    }
    handleView = e => {
        DataObj.player1Health = this.state.player1Health;
        DataObj.player2Health = this.state.player2Health;
        this.setState({ 
            renderView: +e.target.value
        })
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
        switch (this.state.renderView) {
            case 1:
                return <Items />;
            default:
                return (
                    <div className="display-divs" id="fight-div">
                        <div id="text-div"><h1>{this.state.textDiv}</h1></div>
                        <div id="player1">Player 1: {this.state.player1Health} HP, {this.state.player1Attack} ATK</div>
                        <div id="player2">Player 2: {this.state.player2Health} HP, {this.state.player2Attack} ATK</div>
                        <div className='button-div'>
                            <button className="btn" id="attack" onClick={this.handleAttack}>Attack</button>
                            <button className="btn" id="items" value={1} onClick={this.handleView}>Items</button>
                            <button className="btn" id="end-turn" onClick={this.handleEndTurn}>End Turn</button>
                        </div>
                        {/* <p>{DataObj.player1Health}</p> */}
                    </div>
                )
        }
    }
}

export default Fight;