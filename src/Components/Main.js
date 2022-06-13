import React, { Component } from "react";

class Main extends Component {
  state = {
    stuff: ""
  }
  render(){
    return(
      <div id="main-div">

        <h1>A Wild Opponent Appears...</h1>
        <button value={1} onClick={this.props.handleClick}>
          Fight
        </button>
        <button value={2} onClick={this.props.handleClick}>
          Items
        </button>
      </div>
    )
  }
}

export default Main;