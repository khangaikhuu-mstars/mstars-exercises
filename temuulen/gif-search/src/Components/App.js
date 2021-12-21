import React, { useState, useEffect } from 'react'
import '../App.css';
import SearchForm from './SearchForm';
import GifList from './GifList';
import axios from 'axios';

function App() {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState('hey');
  const [isLoading, setIsLoading] = useState(true);

  const performSearch = (value) => setQuery(value);

  useEffect(() => {
    axios(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=b4ezL1Z5w8mpdkc0tt54VBungrleB7Rh`)
      .then(response => setGifs(response.data.data))
      .catch(error => console.log('Error fetching and parsing data', error))
      .finally(() => setIsLoading(false))
  }, [query])

  // useEffect(() => {
  //   performSearch()
  // }, [])
  
  // const performSearch = (query = 'hey') => {
  //   fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=b4ezL1Z5w8mpdkc0tt54VBungrleB7Rh`)
  //     .then(response => response.json())
  //     .then(response => setGifs(response.data))
  //     .catch(error => {console.log('Error fetching and parsing data', error)})
  // }

  return (
    <>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm onSearch={performSearch}/>
        </div>
      </div>
      <div className="main-content">
        {
          isLoading
            ? <p>Loading...</p>
            : <GifList data={gifs}/>
        }
      </div>
    </>
  );
}

export default App

