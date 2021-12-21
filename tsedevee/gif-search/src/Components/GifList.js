import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';

const GifList = props => { 
  
  const results = props.data;
  let gifs;
<<<<<<< HEAD:temuulen/gif-search/src/Components/GifList.js
  if (results.length) {
    gifs = results.map(gif => <Gif url={gif.images.fixed_height.url} key={gif.id} />);    
  } else {
    gifs = <NoGifs />
=======
  if(results.length === 0 ) {
    gifs = <NoGifs/>
  } else {
    
    gifs = results.map(el => {
      return <Gif url={el.images.fixed_height.url} key={el.id}/>
    })
    
>>>>>>> 0f7121fa5b5049eb267631d8465034414fffa925:tsedevee/gif-search/src/Components/GifList.js
  }

  
  return(
    <ul className="gif-list">
      {gifs}
    </ul> 
  );
}

export default GifList;
