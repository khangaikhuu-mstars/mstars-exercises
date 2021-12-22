import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';

const GifList = props => { 
  const results = props.data;

  if(results.length === 0){
      return <NoGifs></NoGifs>
  }
  else{
  const gifs = results.map(el => {
    return <Gif url={el.images.fixed_height.url} key={el.id}/>
  })
  return(
    <ul className="gif-list">
      {gifs}
    </ul> 
  );
}}

export default GifList;
