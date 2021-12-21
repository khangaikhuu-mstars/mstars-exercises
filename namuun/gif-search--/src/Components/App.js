import React, { useState, useEffect} from 'react'
import '../App.css';
import SearchForm from './SearchForm';
import GifList from './GifList';

function App() {

  const [ gifs, setGifs ] = useState([]);
  const [ query, setQuery ] = useState('cats');
  const [ isLoading, setIsLoading ] = useState(true);

  const performSearch = (value) => setQuery(value);

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=FEymU58SVajyk3yBGRV0lPmjhTNn9j2q`)
      .then( response => response.json() )
      .then( data => setGifs(data.data) )
      .catch( error => {
        console.log('Error fetching and parsing data', error);
      })
      .finally(() => setIsLoading(false))
  }, [query])

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

