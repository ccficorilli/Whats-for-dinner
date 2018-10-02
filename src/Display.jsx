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
                <div className="instructions">
                    <p>Unfortunately, this API is free and requires recognition
                    of the original contributor for the recipe instructions. Please 
                    <span><a href={this.props.url}> CLICK HERE </a></span> 
                    or click the recipe image for the complete instructions of this dish.
                    </p> 
                </div>
            </div>    
        );
    }
}
export default Display;