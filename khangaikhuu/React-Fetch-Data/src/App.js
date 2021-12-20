import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs: []
    }
  } 

  componentDidMount(){
    // fetch('https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
    //   .then(response => response.json())
    //   .then(responseData => {
    //     console.log(responseData);
    //     this.setState({gifs: responseData})
    //   })
    const axios = require('axios');
    axios.get('https://api.giphy.com/v1/gifs/trending?api_key=3HIlzdv0iwkBgrNIqLmMs66aciIl5CZE')
      .then(response => {
        this.setState({ 
          gifs: response.data.data
        })
      })
      .catch(err => console.err(err));
  }

  render() { 
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm />      
          </div>   
        </div>    
        <div className="main-content">
          <GifList data={this.state.gifs}/>
        </div>
      </div>
    );
  }
}
