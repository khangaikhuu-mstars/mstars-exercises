import React from 'react';
import propTypes from 'prop-types'
import { Consumer } from './context';
const Counter = ({ index, score }) => {
  return (
    <Consumer>
      {
        context =>{
          return(
    <div className="counter">
      <button className="counter-action decrement" onClick={() => context.actions.changeScore(index, -1)}> - </button>
      <span className="counter-score">{ score }</span>
      <button className="counter-action increment" onClick={() => context.actions.changeScore(index, 1)}> + </button>
    </div>
          )}
      }
    </Consumer>
  );
}

Counter.propTypes = {
  index: propTypes.number,
  score: propTypes.number,
}

export default Counter;