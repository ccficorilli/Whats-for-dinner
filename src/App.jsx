import React, { Component } from 'react';
import axios from 'axios';
import './stylesheet.css';
import Functionality from './Functionality';
import RecipeText from './RecipeText';
import Display from './Display';
import NavBar from './NavBar';

class App extends Component{
    constructor(props){
        super(props)
            this.state = {
                recipes: [],
                searchTerm: '',
                image: '',
                focusedRecipe: '',
                index: false
                
            }
        // this.onClickMethod = this.onClickMethod.bind(this);
        // this.searchChangeHandler = this.searchChangeHandler.bind(this);
    }
    
    onClickSearch = () =>{
        axios.get(`https://api.edamam.com/search?q=${this.state.searchTerm}&app_id=db94298e&app_key=67cad0c983d150908c35fb58db405dcc&from=0&to=5`)
        .then(res => { if(res.data.hits[0] !== undefined){
            this.setState({
                recipes: res.data.hits,
                searchTerm: '',
                index: 0
                });
            }else this.setState({
                searchTerm: ''
            },() => alert("Sorry, that didn't produce any recipes..."))
        })
        .catch(err => console.log(err));
    }
    searchChangeHandler = (e) => {
        this.setState({
            searchTerm: e.target.value
        });
        
    }
    indexForward = () => {
        var i = this.state.index;
        if(i !== false){
            if(this.state.index === 4){
                this.setState({
                    index: 0
                });
            }else
                this.setState({
                    index: (i+1)
                });
        }
    }
    indexBackward = () => {
        var i = this.state.index;
        if(i !== false){
            if(this.state.index === 0){
                this.setState({
                    index: 4
                })
            }else
                this.setState({
                    index: (i-1)
                });
        }
    }


    
    render(){
        return(
            <div className='container'>
                <header><h1>What's for dinner!?</h1></header>
                <Functionality 
                    onClickSearch={this.onClickSearch}
                    searchTerm={this.state.searchTerm}
                    searchChangeHandler={this.searchChangeHandler}
                    recipes={this.state.recipes}
                    index={this.state.index}
                    indexForward={this.indexForward}
                    indexBackward={this.indexBackward}
                />
                <RecipeText 
                    recipes={this.state.recipes}
                    index={this.state.index}
                />
                <NavBar />
                <Display />
            </div>
        )
    }
}
export default App;