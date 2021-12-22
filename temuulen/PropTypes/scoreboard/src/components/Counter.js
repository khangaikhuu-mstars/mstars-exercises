import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD

const Counter = ({ index, score, changeScore }) => {
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
      <span className="counter-score">{ score }</span>
      <button className="counter-action increment" onClick={() => changeScore(index, 1)}> + </button>
    </div>
  );
=======
import { Consumer } from './Context';

const Counter = ({ index, score }) => {

  return (
    <Consumer>
      {context => {
        return (
          <div className="counter">
          <button className="counter-action decrement" onClick={() => context.actions.changeScore(index, -1)}> - </button>
          <span className="counter-score">{score}</span>
          <button className="counter-action increment" onClick={() => context.actions.changeScore(index, 1)}> + </button>
        </div>
        )
      }}
    </Consumer>
  )
>>>>>>> 85d14a3aa4f04b662e91059723db15658e405142
}

Counter.propTypes = {
  index: PropTypes.number,
<<<<<<< HEAD
  score: PropTypes.number,
  changeScore: PropTypes.func,
=======
  score: PropTypes.number
>>>>>>> 85d14a3aa4f04b662e91059723db15658e405142
}

export default Counter;