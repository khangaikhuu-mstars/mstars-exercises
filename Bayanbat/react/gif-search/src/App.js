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
  // componentDidMount() {
  //   fetch('https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
  //     .then(response => response.json())
  //     .then(responseData => {
  //       console.log(responseData)
  //       this.setState({ gif: responseData })
  //     }).catch(console.log("aibisda"))
  // }
  componentDidMount() {
    // const axios = require('axios');
    // axios.get("https://api.giphy.com/v1/gifs/trending?api_key=n3jXLEH04sLWNWIsAS32JFdJD5ZxSVDs")
    //   .then(response => {
    //     console.log(response)
    //     this.setState({
    //       gifs: response.data.data
    //     })
    //   })
    //   .catch(err => console.log(err))
    this.preformSearch()
  }
  preformSearch = (query = "drug dealer") => {
    const axios = require('axios')
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=12&api_key=n3jXLEH04sLWNWIsAS32JFdJD5ZxSVDs`)
      .then(response => {
        console.log(response)
        this.setState({
          gifs: response.data.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.preformSearch} />
          </div>
        </div>
        <div className="main-content">
          <GifList gif={this.state.gifs} />
        </div>
      </div>
    );
  }
}
