import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs'

const GifList = props => { 
  const results = props.data;
  let gifs;
  if(results.length === 0){
    gifs = <NoGifs/>
  }else{
    gifs = results.map(gif =>{
      return <Gif url={gif.images.fixed_height.url} key={gif.id}/>
    })
   
  }

  // const gifs =results.map(gif =>{
  //   return <Gif url={gif.images.fixed_height.url} key={gif.id}/>
  // })
  return(

    <ul className="gif-list">

     {gifs}
    </ul> 
  );
}


export default GifList;
