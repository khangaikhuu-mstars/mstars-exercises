import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';
import axios from 'axios';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs: []
    }
  }

  render() {

    const axios = require('axios');
    axios.get('https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
      .then(data => {
        // console.log(data)
        this.setState ({
          gifs: data
        })
      }) 
      .catch(err => console.log(err));

    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm />
          </div>
        </div>
        <div className="main-content">
          <GifList data={this.state.gifs.data}/>
        </div>
      </div>
    );
  }
}
