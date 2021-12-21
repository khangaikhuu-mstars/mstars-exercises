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

  
  componentDidMount() {
    this.performSearch();
  }
    
    performSearch = (query = 'gogo') => {
      const axios = require('axios');
  
      axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=yPEd2lIJ0t3wK963rcmdG2zcanM7IQg3`)
        .then(response => {
          this.setState({
            gifs: response.data.data
          })
        })
        .catch(err => console.err(err));
      };
  


  render() {
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            {/* <SearchForm onSearch={this.performSearch}/> */}
          </div>
        </div>
        <div className="main-content">
          <GifList data={this.state.gifs} />
        </div>
      </div>
    );
  }
}
