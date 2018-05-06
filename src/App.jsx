import React, { Component } from 'react';
import axios from 'axios';
import './stylesheet.css';
import Functionality from './Functionality';
import RecipeText from './RecipeText';
import Display from './Display';

class App extends Component{
    constructor(props){
        super(props)
            this.state = {
                recipes: [],
                searchTerm: '',
                index: false,
                dropdown: false,
                placeholder: 'Search here...'
                
            }
        // this.onClickMethod = this.onClickMethod.bind(this);
        // this.searchChangeHandler = this.searchChangeHandler.bind(this);
    }
    
    onClickSearch = () =>{
        axios.get(`https://api.edamam.com/search?q=${this.state.searchTerm}&app_id=db94298e&app_key=67cad0c983d150908c35fb58db405dcc&from=0&to=5`)
        .then(res => { if(res.data.hits[0] !== undefined){
            this.setState({
                recipes: res.data.hits,
                placeholder: `Last Search ~ ${this.state.searchTerm}`,
                searchTerm: '',
                index: 0,
                dropdown: false,
                });
            }else this.setState({
                searchTerm: '',
                dropdown: false
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
                    index: 0,
                    dropdown: false
                });
            }else
                this.setState({
                    index: (i+1),
                    dropdown: false
                });
        }
    }
    indexBackward = () => {
        var i = this.state.index;
        if(i !== false){
            if(this.state.index === 0){
                this.setState({
                    index: 4,
                    dropdown: false
                })
            }else
                this.setState({
                    index: (i-1),
                    dropdown: false
                });
        }
    }
    toggleDropdown = () =>{
        if(this.state.dropdown === false){
            this.setState({
                dropdown: true
            });
        }else
            this.setState({
                dropdown: false
            });
    }
    resetBtnClick = () => {
        this.setState({
            recipes: [],
            searchTerm: '',
            index: false,
            dropdown: false
        })
    }
    firstRun = () => {
        while(this.state.index === false){
            return <div></div>
        }return (
            <div>
                <RecipeText 
                    recipes={this.state.recipes}
                    index={this.state.index}
                />
                <Display
                    toggleDropdown={this.toggleDropdown}
                    dropdown={this.state.dropdown}
                    reset={this.resetBtnClick}
                />
            </div>
        );
    }
    render(){
        return(
            <div className='container'>
               <h1>What's for dinner!?</h1>
                <Functionality 
                    onClickSearch={this.onClickSearch}
                    searchTerm={this.state.searchTerm}
                    searchChangeHandler={this.searchChangeHandler}
                    recipes={this.state.recipes}
                    index={this.state.index}
                    indexForward={this.indexForward}
                    indexBackward={this.indexBackward}
                    placeholder={this.state.placeholder}
                />
                {this.firstRun()}
            </div>
        )
    }
}
export default App;