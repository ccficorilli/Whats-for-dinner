import React, {Component} from 'react';
import Search from './Search';
import Nutrition from './Nutrition';
import RecipeImg from './RecipeImg';

class Functionality extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
        <div className='holding-cell'>       
            <div className="search-col">
                <div><h3>What's in the Fridge??</h3></div>
                <Search 
                    onClickMethod={this.props.onClickMethod}
                    searchTerm={this.props.searchTerm}
                    searchChangeHandler={this.props.searchChangeHandler}  
                />
                <RecipeImg />    
            </div>
            <Nutrition />
        </div>
        );
    }
}
export default Functionality;