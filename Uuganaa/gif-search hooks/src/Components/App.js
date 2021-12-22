import React, {useState, useEffect}from 'react'
import '../App.css';
import axios from 'axios';

import SearchForm from './SearchForm';
import GifList from './GifList';


function App() {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState('dogs');
  const [isLoading, setIsLoading] = useState(true);

  const performSearch = (value) => setQuery(value);

  useEffect(()=>{
    axios(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=JOJKoKCuYd5ANNdJzDFG8Ldj9vTD3kAx `)
    .then(response => setGifs(response.data.data))
    .catch(error => console.log('Error afojsdk'))
    .finally(()=>setIsLoading(false))
  }, [query]);
  
    
  return (
    <>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm onSearch={performSearch} />
        </div>
      </div>
      <div className="main-content">
      <GifList data={gifs}/>

      </div>
    </>
  );

  }
export default App

