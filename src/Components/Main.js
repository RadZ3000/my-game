import React, { Component } from "react";
import './../App.css';

class Main extends Component {
  state = {
    stuff: ""
  }
  render(){
    return(
      <div className="display-divs" id="main-div">

        <h1>A Wild Opponent Appears...</h1>
        <button className="btn" value={1} onClick={this.props.handleClick}>
          Fight
        </button>
        <button className="btn" value={2} onClick={this.props.handleClick}>
          Items
        </button>
      </div>
    )
  }
}

export default Main;