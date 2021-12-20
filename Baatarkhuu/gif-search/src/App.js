import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs:[]
    }
  } 

    componentDidMount() {
    //   fetch('https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
    //   .then(response => response.json())
    //   .then(responseData => {
    //     console.log(responseData)
    //       this.setState({ gifs: responseData })
    //   })
    //   .catch()
    // }

    // const axios = require ('axios')
    //  Make a request for a user
      // axios.get('https://api.giphy.com/v1/gifs/trending?api_key=RR2tMgK4m50fP2Amvqmi35WQcDxfQzk0')
      // .then((response) => {
      //   // handle success 
      //   this.setState({
      //     gifs: response.data.data
      //   })
      // })
      // .catch(function (error){
      //   // handle error 
        
      // })
      // .then(function(){
      //     // always executed 
      // })
      this.performSearch();
  }
  
  performSearch = (query = 'cats') => {
    const axios = require('axios')
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=12&api_key=RR2tMgK4m50fP2Amvqmi35WQcDxfQzk0 
    `)
    .then(response => {
      this.setState({
        gifs: response.data.data
      })
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error)
    })
  }


  render() { 
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm  onSearch={this.performSearch}/>      
          </div>   
        </div>    
        <div className="main-content">
          <GifList data={this.state.gifs}/>
        </div>
      </div>
    );
  }
}
                                                                                                                                                                      