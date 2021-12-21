import React, {useState, useEffect} from 'react'
import '../App.css';
import axios from 'axios';

import SearchForm from './SearchForm';
import GifList from './GifList';

function App() {
const [gifs, setGifs]=useState([]);
const [query, setQuery] = useState('cats');


const performSearch = (value) => setQuery(value)

useEffect(() => {
 axios(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=15&api_key=6ohLoKfIZw4q0w2nFlcvjhs4xDaGJnNQ`)
.then(response => setGifs(response.data.data))
.catch(error => console.log('p ym daa sda'))


}, [query])



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

