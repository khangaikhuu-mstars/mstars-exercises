import React from 'react';

const Gif = props => {
  return(
  <li className="gif-wrap">
    <img alt="" src={props.url}/>
  </li>
  )
}

export default Gif;