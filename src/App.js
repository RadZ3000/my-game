import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';
import Fight from './Components/FightComponent'
import Items from './Components/Items';

// window.onbeforeunload = (e) => {
//   return "Are you sure you want to leave? Changes you made may not be saved!";
// }

class GameApp extends Component {
    state = {
      renderView: 0
    }
  handleClick = e => {
    this.setState({
      renderView: +e.target.value
    })
  }

  render() {
    switch(this.state.renderView){
      case 1:
        return <Fight />;
      case 2:
        return <Items />;
      default:
        return <Main handleClick={this.handleClick} />;
    }
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<GameApp />, rootElement);

export default GameApp;