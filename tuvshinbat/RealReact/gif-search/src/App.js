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
    
    //1 fetch eer
    // fetch('https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
    // .then(response => response.json())
    // .then(responseData => {
    //   console.log(responseData)
    //   this.setState({gifs: responseData})
    // })
    
    // 2 axios oor
    // const axios = require('cats');
    // axios.get("https://api.giphy.com/v1/gifs/trending?api_key=6ohLoKfIZw4q0w2nFlcvjhs4xDaGJnNQ")
    //   .then(response => {
    //     console.log(response)
    //     this.setState({
    //       gifs: response.data.data
    //     })
    //     console.log(response.data.data)
    //   }).catch(error => {
    //     console.log(error);


    //   })
      //3 performSearch eer
      console.log('performsearch')
      this.performSearch()
  }


  performSearch = (query="cat") => {
    const axios = require("axios")
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=15&api_key=6ohLoKfIZw4q0w2nFlcvjhs4xDaGJnNQ`)
      .then(response => {
        this.setState({
          gifs: response.data.data
        })
      }).catch(error => {
        console.log('error fetching and parsing data', error);
      });
  }
  render() {
    console.log('renderLive')
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch} />
          </div>
        </div>
        <div className="main-content">
          <GifList data={this.state.gifs} />
        </div>
      </div>
    );
  }
}
