import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';
import { render } from 'react-dom';

export default class App extends Component {
  
  constructor() {
    super();
    this.state ={
      gifs:[]
    }
  } 
  componentDidMount(){
    this.perFormSearch();
    // const axios = require('axios');
    // axios.get('https://api.giphy.com/v1/gifs/trending?api_key=qj9IGJQ927hLsA98n71VY73Jx5uvKqpN')
    // .then(response => {
    //   console.log(response.data.data)
    //   this.setState({
    //     gifs: response.data.data
    //   })
    // })
    // .catch(error => console.log(error))
  }
  perFormSearch =(query ='cats')=>{
       const axios = require('axios')
         axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=qj9IGJQ927hLsA98n71VY73Jx5uvKqpN`).then(response => {
           this.setState({
             gifs: response.data.data
           })
         })
         .catch(err =>{
           console.log('Error fetching and parsing data', err)
         });
  }

  render() { 
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch = {this.perFormSearch}/>      
          </div>   
        </div>    
        <div className="main-content">
          <GifList data ={this.state.gifs}/>
        </div>
      </div>
    );
  }
};
