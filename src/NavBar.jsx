import React, { Component } from 'react';
import menu  from './images/menu.png'

class NavBar extends Component {

    render(){
        if(this.props.dropdown === true){
            return(
                <div className="navbar">
                    <img src={menu} onClick={this.props.toggleDropdown}/>
                        <button className="nav-btn reset-btn" onClick={this.props.reset}>Reset</button>
                        <button className="nav-btn burner">Burn It Off!</button>
                        <button className="nav-btn nearby">Where to Buy</button>
                        <button className="nav-btn restaurants">I'm Lazy</button>
                        <button className="nav-btn print">Print Recipe</button>
                </div>
            )}else return(
                <div className="navbar">
                    <img src={menu} onClick={this.props.toggleDropdown}/>
                </div>
            )}
}
export default NavBar;