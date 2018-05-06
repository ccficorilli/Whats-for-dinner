import React, { Component } from 'react';
import plate from './images/plate.png';
import leftArrow from './images/leftArrow.png';
import rightArrow from './images/rightArrow.png';

class RecipeImg extends Component {
    
    createTitle = () => {
        const i = this.props.index;
        if(i === false){
            return '';
        }else
            return <span>{this.props.recipes[i].recipe.label}</span>;
    }
    createImg = () => {
        const i = this.props.index;
        if(i === false){
            return plate;
        }else 
            return this.props.recipes[i].recipe.image;
    }
    createURL = () => {
        const i = this.props.index;
        if(i === false){
            return '';
        }else
            return this.props.recipes[i].recipe.url;
    }

    render(){
        
        return(
            <div className="choices">
                <div className="tester">
                    <div className="left-arrow">
                        <img 
                            className="imgArrows" 
                            src={leftArrow} 
                            alt="Broken link" 
                            onClick={this.props.indexBackward}
                        />
                    </div> 
                    <div className="choice-title">{this.createTitle()}</div>
                    <div className="right-arrow">
                        <img 
                            className="imgArrows" 
                            src={rightArrow} 
                            alt="Broken link" 
                            onClick={this.props.indexForward} 
                        />
                    </div>
                </div>
                    <a href={this.createURL()} 
                        target="_blank">
                        <div className="choice-img">
                            <img
                                className="imgHolder"
                                src={this.createImg()} 
                                alt="Ooops, looks like something is broken..."
                            />
                        </div>
                    </a>                          
            </div>
        )
    }
}
export default RecipeImg;