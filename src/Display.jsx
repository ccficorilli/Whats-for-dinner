import React, { Component } from 'react';
import NavBar from './NavBar'
class Display extends Component {

    render(){
        return(
            <div className="display">
                <NavBar 
                    dropdown={this.props.dropdown}
                    toggleDropdown={this.props.toggleDropdown}
                    reset={this.props.reset}
                />
            </div>    
        );
    }
}
export default Display;