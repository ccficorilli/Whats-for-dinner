import React, { Component } from 'react';
import IngredientList from './IngredientList'
import Display from './Display'

class RecipeText extends Component{

    loadCheck = () =>{
        const i = this.props.index;
        if(this.props.index !== false){
            return <Display 
                        url={this.props.recipes[i].recipe.url}
                        toggleDropdown={this.props.toggleDropdown}
                        dropdown={this.props.dropdown}
                        reset={this.props.reset}
                    />
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