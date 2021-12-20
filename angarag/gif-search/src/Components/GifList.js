import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs'

const GifList = props => { 
  const data = props.gif
  let gifs;

  if(data.length === 0){
    gifs = <NoGifs/>
  }else{
     gifs = data.map((gif)=>{ 
     return <Gif url = {gif.images.fixed_height.url} key = {gif.id}/>
     
    })
  }
  return(
    <ul className="gif-list">
        {gifs}
    </ul> 
  );
}

export default GifList;
