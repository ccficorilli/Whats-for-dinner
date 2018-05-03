import React, { Component } from 'react';
import axios from 'axios';
import './stylesheet.css';
import Functionality from './Functionality';
import RecipeText from './RecipeText';
import Display from './Display';
import NavBar from './NavBar';
import unirest from 'unirest'
var temp = {}
class App extends Component{
    constructor(props){
        super(props)
            this.state = {
                fetchedRecipes: [],
                searchTerm: '',
                image: '',
                focusedRecipe: ''
            }
        // this.onClickMethod = this.onClickMethod.bind(this);
        this.searchChangeHandler = this.searchChangeHandler.bind(this);
    }
    
    onClickMethod = () =>{
        axios.get(`https://api.edamam.com/search?q=${this.state.searchTerm}&app_id=db94298e&app_key=67cad0c983d150908c35fb58db405dcc&from=0&to=5`)
        .then(res => { if(res.data.hits[0] !== undefined){
            this.setState({
                fetchedRecipes: res.data.hits
                },()=> console.log(res.data));
            }else this.setState({
                searchTerm: ''
            },() => alert("Sorry, that didn't produce any recipes..."))
        })
        .catch(err => console.log(err));
    }
    searchChangeHandler = (e) => {
        this.setState({
            searchTerm: e.target.value
        },() => console.log(this.state.searchTerm))
        
    }


    
    render(){
        return(
            <div className='container'>
                <header><h1>What's for dinner!?</h1></header>
                <Functionality 
                    onClickMethod={this.onClickMethod}
                    searchTerm={this.state.searchTerm}
                    searchChangeHandler={this.searchChangeHandler}
                />
                <RecipeText 
                    focusedRecipe={this.state.focusedRecipe}
                />
                <NavBar />
                <Display />
            </div>
        )
    }
}
export default App;