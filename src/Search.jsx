import React, {Component} from 'react';

class Search extends Component{
  
    render(){
        return(            
            <div className="searchbar">
                <input 
                    type="text" 
                    placeholder={this.props.placeholder} 
                    value={this.props.searchTerm}
                    onChange={e => this.props.searchChangeHandler(e)}
                />
                <button className="search-btn"
                        type="submit" 
                        onClick={this.props.onClickSearch}>Search</button>
            </div>
        )
    }
}
export default Search;