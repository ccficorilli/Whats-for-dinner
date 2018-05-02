import React, { Component } from 'react';

class NavBar extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="navbar">
                <div className="nav reset-btn">Reset</div>
                <div className="nav burner">Burn It Off!</div>
                <div className="nav nearby">Where to Buy</div>
                <div className="nav restaurants">I'm Lazy</div>
                <div className="nav print">Print Recipe</div>
            </div>
        )
    }
}
export default NavBar;