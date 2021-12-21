import React, { useEffect, useState } from 'react'
import '../App.css';
import axios from 'axios';
import SearchForm from './SearchForm';
import GifList from './GifList';

function App() {
   const [ gifs, setGifs ] = useState([]);
   const perFormSearch =(gif ='cats')=>{
     
      fetch(`http://api.giphy.com/v1/gifs/search?q=${gif}&api_key=qj9IGJQ927hLsA98n71VY73Jx5uvKqpN`)
      .then(response => response.json())
      .then((res)=> {
        setGifs(res.data);
      console.log(res.data)
     })
     .catch(err =>{
       console.log('Error fetching and parsing data', err)
     })

   }
   useEffect(()=>{
       perFormSearch()
   }, [])
  return (
    <>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm onSearch= {perFormSearch}/>
        </div>
      </div>
      <div className="main-content">
       <GifList data = {gifs}/>
      </div>
    </>
  );
}

export default App

