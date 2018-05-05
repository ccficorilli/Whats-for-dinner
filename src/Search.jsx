import React, {Component} from 'react';

class Search extends Component{
  
    render(){
        return(            
            <div className="searchbar">
                <input 
                    type="text" 
                    placeholder="Search for..." 
                    value={this.props.searchTerm}
                    onChange={e => this.props.searchChangeHandler(e)}
                />
                <button type="submit" onClick={this.props.onClickSearch}>Search</button>
            </div>
        )
    }
}
export default Search;