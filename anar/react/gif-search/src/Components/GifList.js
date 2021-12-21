import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';

const GifList = props => {

  const results = props.data;
  // console.log(results);

  let data = results.map(gif => {
    return <Gif url={gif.images.fixed_height.url} key={gif.id} />
  });

  if (results.length === 0) {
    data = <NoGifs />;
  } 
  
  return (
    <ul className="gif-list">
      {data}
    </ul>
  );
}

export default GifList;
