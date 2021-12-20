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
  
  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'jack nicholson') => {
    const apiKey = '6RtkCtaWlnmsFeZ9P0pPD8U524A2E4vQ';
    const axios = require('axios');
    console.log(query);
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=30&api_key=${apiKey}`)
      .then(response => {
        this.setState({
          gifs: response.data.data
        })
      })
      .catch(err => {
        console.log('Fetching Error ' + err);
      });
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

// 2611184513
// st kod ovog ner registr utas
// 545