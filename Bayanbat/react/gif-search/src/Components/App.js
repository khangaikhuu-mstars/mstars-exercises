import React, { useState, useEffect } from 'react'
import '../App.css';

import SearchForm from './SearchForm';
import GifList from './GifList';
import Gif from './Gif';

const App = () => {
  const [gifs, setGifs] = useState([]);
  const preformSearch = (query = "drug dealer") => {
    const axios = require('axios')
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=12&api_key=n3jXLEH04sLWNWIsAS32JFdJD5ZxSVDs`)
      .then(response => {
        setGifs(response.data.data);
        console.log(response)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    preformSearch()
  }, []);

  return (
    <>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm onSearch={preformSearch} />
        </div>
      </div>
      <div className="main-content">
        <GifList gif={gifs} />
      </div>
    </>
  );
}


export default App
