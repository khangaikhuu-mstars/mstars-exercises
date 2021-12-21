import React, { Component, useState, useEffect } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {
  
  // constructor() {
  //   super();
  //   this.state={
  //     gifs: []
  //   }
  // } 
  function App (){
    const 
  }

  componentDidMount(){
    const axios = require('axios');
    axios.get('https://api.giphy.com/v1/gifs/trending?api_key=JOJKoKCuYd5ANNdJzDFG8Ldj9vTD3kAx')
    // fetch('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
    .then(response => {
      this.setState({
        gifs: response.data.data
      })
    })
    .catch(function(error){
    })
  }

  componentDidMount(){
    this.performSearch();
  }

  performSearch = (query = 'cars') => {
    const axios = require('axios')
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=JOJKoKCuYd5ANNdJzDFG8Ldj9vTD3kAx `)
    .then(response => {
      this.setState({
        gifs: response.data.data
      })
    })
    .catch(error => {
      console.log('error', error);
    });
  }

  render() { 
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch} />      
          </div>   
        </div>    
        <div className="main-content">
          <GifList data={this.state.gifs}/>
        </div>
      </div>
    );
  }
}

