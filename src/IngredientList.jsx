import React, { Component } from 'react';

class IngredientList extends Component {

    listCreation(){
        const i = this.props.index;
        const ingredients = this.props.recipes[i].recipe.ingredientLines;
        if(ingredients.length < 9){
            return (
                <div className="ingredients">
                    <ul>
                        {ingredients.map(data => 
                            <li key={Math.random()}>
                                {data}
                            </li>
                        )}
                    </ul>
                </div>)
        }else
        var ingredientList1 = [];
        var ingredientList2 = [];
        for(var j = 0; j < ingredients.length; j++){
            if(Number.isInteger(j / 2)){
                ingredientList1.push(ingredients[j])
            }else 
                ingredientList2.push(ingredients[j])
        }
        return (
            <div className="ingredients">
                <div className="list-1">
                    <ul>{ingredientList1.map(data => 
                        <li key={Math.random()}>{data}</li>)}
                    </ul>
                </div>
                <div className="list-2">
                    <ul>{ingredientList2.map(data => 
                        <li key={Math.random()}>{data}</li>)}
                    </ul>
                </div>
            </div>)
        
    }
    render(){
        const i = this.props.index;
        if(i !== false){
            return this.listCreation();
        }else
            return <div className="ingredients"></div>
    }
}
export default IngredientList;