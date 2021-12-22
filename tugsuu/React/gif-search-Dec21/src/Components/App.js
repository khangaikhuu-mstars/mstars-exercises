import React , {useState , useEffect} from 'react'
import '../App.css';
import axios from 'axios';

import SearchForm from './SearchForm';
import GifList from './GifList';

function App() {

  const [gifs , setGifs] = useState([])
  const [query , setQuery] = useState('javascript')
  const [isLoading , setIsLoading] = useState(true)

  const performSearch = (value) => setQuery(value)

  useEffect(()=>{
    axios(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=s3hCvG3GScD82Kaok2kwouuJOx6KM2Qc`)
    .then(response => setGifs(response.data.data))
    .catch(error => console.log('error', error))
    .finally(()=> setIsLoading(false))
  } , [query])

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
          isLoading?<h1 className='loading'> <span role='img' aria-label=''>Loading ⌛</span></h1>:<GifList data={gifs}/>
        } 
      </div>
    </>
  );
}

export default App

