import React, { Component } from 'react';
import plate from './images/plate.png';
import leftArrow from './images/leftArrow.png';
import rightArrow from './images/rightArrow.png';

class RecipeImg extends Component {
    
    createTitle = () => {
        const x = this.props.index;
        if(x === false){
            return '';
        }else
            Number(x);
            return <span>{this.props.recipes[x].recipe.label}</span>;
    }
    createImg = () => {
        const x = this.props.index;
        if(x === false){
            return plate;
        }else 
            return this.props.recipes[x].recipe.image;
    }
    createURL = () => {
        const x = this.props.index;
        if(x === false){
            return '';
        }else
            return this.props.recipes[x].recipe.url;
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
                <div className="choice-img">
                    <a className="imgHolder"
                        href={this.createURL()} 
                        target="_blank">
                        <img
                            className="imgHolder"
                            src={this.createImg()} 
                            alt="Ooops, looks like something is broken..."
                        />
                    </a>
                </div>                          
            </div>
        )
    }
}
export default RecipeImg;