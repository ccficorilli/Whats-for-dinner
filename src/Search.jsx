import React, {Component} from 'react';

class Search extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            
            <div className="searchbar">
                <input 
                    type="text" 
                    placeholder="Search for..." 
                    value={this.props.searchTerm}
                    onChange={e => this.props.searchChangeHandler(e)}
                />
                <button type="submit" onClick={this.props.onClickMethod}>Search</button>
            </div>
        )
    }
}
export default Search;