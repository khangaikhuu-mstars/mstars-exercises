import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {
  
  constructor() {
    super();
    this.state ={
      gifs: []
    }
  } 
  componentDidMount(){
    // fetch('https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
    // .then(response =>response.json())
    // .then(responseData =>{
    //   console.log(responseData)
    //   this.setState({gifs: responseData})
    // })
    // .catch()
    this.performSearch()
  }
  performSearch = (query='dogs')=>{
    const axios = require('axios')
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=uVu3Ag0VqjkTudUD0eRooOQ2Bxf7NvxV `)
    .then(response=>{
      this.setState({
        gifs: response.data.data
      })
    })
    .catch(error=>{
      console.log('Error fetching and', error)
    })
  }
  render() { 
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch}/>      
          </div>   
        </div>    
        <div className="main-content">
          <GifList data={this.state.gifs}/>
        </div>
      </div>
    );
  }
}
