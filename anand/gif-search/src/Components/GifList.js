import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';
const GifList = props => { 
  console.log(props)
  
  const results = props.data
  if(results.length==0){
    return <NoGifs></NoGifs>
  }
  else{
  const gifs = results.map(gif =>{
    return <Gif url={gif.images.fixed_height.url} key={gif.id}></Gif>
  })
  return(
    <ul className="gif-list">
      {gifs}
    </ul> 
  );
}}

export default GifList;
