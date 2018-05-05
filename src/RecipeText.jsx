import React, { Component } from 'react';

class RecipeText extends Component{

    loadCheck(){
        if(this.props.index !== false){
            var i = this.props.index;
            return this.props.recipes[i].recipe.url;
        }else
            return 'localhost:3000';
    }
    
    render(){
        return(
            <div className="recipe-row">
                <div className="ingreidients">
                    {this.splitIngredientList}
                </div>
                <div className="instructions">
                    <p>Unfortunately, this is a free API and requires recognition
                     of the website for the original recipe and instructions. Please <span href={this.loadCheck}>
                         CLICK HERE </span> or click the recipe
                        image for the complete instructions for this dish.
                    </p>
                </div>
                    
            </div>
        
        )}
}
export default RecipeText;