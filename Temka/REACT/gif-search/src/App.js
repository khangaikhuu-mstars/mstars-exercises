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

  performSearch =(query='cats')=>{
    const axios = require("axios")
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=2wugqWCMcg3Sr80mnPwn8TT3jxtwafru`)
    .then(responseData =>{
      this.setState({gifs: responseData.data.data})
    }).catch((err)=>{
      console.log(err)
    })

  }

  componentDidMount(){
    this.performSearch();
  
    // const axios = require("axios")

    // axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=2wugqWCMcg3Sr80mnPwn8TT3jxtwafru`)
    // .then(responseData =>{
    //   this.setState({gifs: responseData.data.data})
    // }).catch((err)=>{
    //   console.log(err)
    // })

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
          <GifList gifs={this.state.gifs}/>
        </div>
      </div>
    );
  }
}
