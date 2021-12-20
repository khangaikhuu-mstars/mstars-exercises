import React, { Component } from "react";
import "./App.css";
import SearchForm from "./Components/SearchForm";
import GifList from "./Components/GifList";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }

  componentDidMount() {
    this.performSearch();
  }
  performSearch = (query = "kobe") => {
    const axios = require("axios");
    axios
      .get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=15&api_key=2KAsv3y5kAO1SVQhgy95PBddueDOYHzS`)
      .then((data) => {
        this.setState({
          gifs: data.data.data,
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

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
          <GifList gif={this.state.gifs} />
        </div>
      </div>
    );
  }
}
