
// let ItemsObj = {
//     Sword: 20,
//     Spear: 15,
//     Axe: 25
// }

// export default ItemsObj;


import React, { Component } from 'react';
import Fight from './Fight';
import DataObj from './Data';

let itemsObj = {
    Sword: 20,
    Spear: 15,
    Axe: 25
}

class Items extends Component {
    state = {
        renderView: 0,
        text: "Choose your Weapon",
        Equipped: null
    }
    handleChooseItem = e => {
        for(let item in itemsObj){
            if(item.toString() === e.target.value){
                DataObj.player1Attack = itemsObj[item];
                this.setState({
                    text: "You choose the " + item +"!",
                    Equipped: itemsObj[item]
                })
            }
        }
        setTimeout(() => {
            this.setState({
                renderView: 1
            })
        }, 2000)
    }
    render(){
        switch(this.state.renderView){
            case 1:
                return <Fight />;
            default:
                return(
                    <div id="items-div">
                        <h1>{this.state.text}</h1>
                        <button id="sword" value={"Sword"} onClick={this.handleChooseItem}>Sword</button>
                        <button id="spear" value ={"Spear"} onClick={this.handleChooseItem}>Spear</button>
                        <button id="axe" value={"Axe"} onClick={this.handleChooseItem}>Axe</button>

                    </div>
                );
        }
    }
}

export default Items;