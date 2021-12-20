import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs'

const GifList = props => { 
  const results = props.gifs;
  let gifs;

  if(results.length > 0){
    gifs = results.map( (gif) => {
        return <Gif url={gif.images.fixed_height.url}/>
      }
    )
  }else{
    gifs = <NoGifs/>
  }

  console.log(results)
  return(
    <ul className="gif-list">
      {gifs}
    </ul> 
  );
}

export default GifList;
