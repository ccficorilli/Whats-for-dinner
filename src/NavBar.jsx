import React, { Component } from 'react';
import menu  from './images/menu.png'

class NavBar extends Component {


    render(){
        if(this.props.dropdown === true){
            return(
                <div className="navbar">
                    <img className="menuTab" src={menu} onClick={this.props.toggleDropdown} alt="broken image"/>
                            <button className="nav-btn reset-btn" onClick={this.props.reset}>Reset</button>
                            <button className="nav-btn burner">Exercise</button>
                            <button className="nav-btn nearby">Markets</button>
                            <button className="nav-btn restaurants">I'm Lazy</button>
                            <button className="nav-btn print">Print</button>
                </div>
            )}else return(
                <div className="navbar">
                    <img className="menuTab" src={menu} onClick={this.props.toggleDropdown} alt="broken image"/>
                </div>
            )}
}
export default NavBar;