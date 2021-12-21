import React, {useEffect, useState} from 'react'
import '../App.css';


import SearchForm from './SearchForm';
import GifList from './GifList';


function App() {

  const [gifs, setGifs] = useState([])
  const [query, setQuery] = useState("cat")

  function performSearch(query){
    console.log("performSearch called")
    const axios = require('axios')
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=2wugqWCMcg3Sr80mnPwn8TT3jxtwafru`)
    .then(response =>{
      console.log(response.data.data)
      setGifs(response.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    console.log("useEffect Called");
    performSearch(query);
  },[query])

  


  return (
    <>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm onSearch={performSearch}/>
        </div>
      </div>
      <div className="main-content">
        <GifList gifs={gifs}/>
      </div>
    </>
  );
}

export default App

