import React from 'react';


const Gif = props => (
  <li className="gif-wrap">
    <img src={props.url} alt=""/>
  </li>
);

// console.log(props.url);

export default Gif;