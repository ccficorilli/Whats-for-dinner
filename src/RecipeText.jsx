import React, { Component } from 'react';
import IngredientList from './IngredientList.jsx'

class RecipeText extends Component{

    loadCheck = () =>{
        const i = this.props.index;
        if(this.props.index !== false){
            const url = this.props.recipes[i].recipe.url;
            return (
                <div className="instructions">
                    <p>Unfortunately, this API is free and requires recognition
                    of the original contributor for the recipe instructions. Please 
                    <span><a href={url}> CLICK HERE </a></span> 
                    or click the recipe image for the complete instructions for this dish.
                    </p> 
                </div>);
        }else
            return '';
    }
    
    render(){
        return(
            <div className="recipe-row">
                <IngredientList 
                    recipes={this.props.recipes}
                    index={this.props.index}
                />
                {this.loadCheck()}
            </div>
        )}
}
export default RecipeText;