import React, { Component } from 'react';

class RecipeImg extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="choices">
                <div className="left-arrow">left arrow</div>
                <div className="right-arrow">right arrow</div>
                <div className="choice-title">This is where the Title goes</div>
                <div className="choice">Image of the Choice</div>                          
            </div>
        )
    }
}
export default RecipeImg;