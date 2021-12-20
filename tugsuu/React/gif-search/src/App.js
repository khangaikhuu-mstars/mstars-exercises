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
    //   .then(response => response.json())
    //   .then(responseData =>{
    //     this.setState({ gifs: responseData})
    //   })





    // const axios = require('axios')
    // axios.get('https://api.giphy.com/v1/gifs/trending?api_key=s3hCvG3GScD82Kaok2kwouuJOx6KM2Qc')
    //   .then(response =>{
    //     this.setState({
    //       gifs: response.data.data
    //     })
    //   })
    //   .catch(err => console.log(err))


    this.performSearch()
  }

  performSearch = (query = 'cats') =>{
    const axios = require('axios')
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=s3hCvG3GScD82Kaok2kwouuJOx6KM2Qc`)
      .then(response => {
        this.setState({
          gifs: response.data.data
        })
      })
      .catch(error =>{
        console.log('error fetching and parsind data' , error)
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
          <GifList data={this.state.gifs}
          />
        </div>
      </div>
    );
  }
}
