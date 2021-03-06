import React, {Component} from 'react';
import Search from './Search';
import Nutrition from './Nutrition';
import RecipeImg from './RecipeImg';

class Functionality extends Component{

    render(){
        return(
        <div className='holding-cell'>       
            <div className="search-col">
                <div><h2>I feel like having....</h2></div>
                <Search 
                    onClickSearch={this.props.onClickSearch}
                    searchTerm={this.props.searchTerm}
                    searchChangeHandler={this.props.searchChangeHandler}
                    placeholder={this.props.placeholder}
                />
                <RecipeImg
                    recipes={this.props.recipes}
                    index={this.props.index}
                    indexForward={this.props.indexForward}
                    indexBackward={this.props.indexBackward}
                />    
            </div>
            <Nutrition 
                recipes={this.props.recipes}
                index={this.props.index}
            />
        </div>
        );
    }
}
export default Functionality;