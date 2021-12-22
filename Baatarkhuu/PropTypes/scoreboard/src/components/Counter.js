import React from 'react';
import PropTypes from 'prop-types'
<<<<<<< HEAD
const Counter = ({ index, score, changeScore }) => {
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
      <span className="counter-score">{ score }</span>
      <button className="counter-action increment" onClick={() => changeScore(index, 1)}> + </button>
    </div>
=======
import { Consumer } from './Context';
const Counter = ({ index, score }) => {
  return (
    <Consumer>
      {context => {
        
        return (
        <div className="counter">
      <button className="counter-action decrement" onClick={() => context.actions.changeScore(index, -1)}> - </button>
      <span className="counter-score">{ score }</span>
      <button className="counter-action increment" onClick={() => context.actions.changeScore(index, 1)}> + </button>
    </div>
        )
    }}
    </Consumer>
>>>>>>> 6ee0dd4d7d64c5444294cbc9429cf6c8ebb99b02
  );
}

Counter.propTypes = {
    index: PropTypes.number,
<<<<<<< HEAD
    score: PropTypes.number,
    changeScore:  PropTypes.func,
=======
    score: PropTypes.number
>>>>>>> 6ee0dd4d7d64c5444294cbc9429cf6c8ebb99b02
}

export default Counter;