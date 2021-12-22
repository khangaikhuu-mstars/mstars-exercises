import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './context';


const Counter = ({ index, score}) => {
  return (
    <Consumer>
      {context => {
          const changeScore = context.actions.changeScore;
          // const score = context.score
          return (
            <div className="counter">
              <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
              <span className="counter-score">{score}</span>
              <button className="counter-action increment" onClick={() => changeScore(index, 1)}> + </button>
            </div>
          )
        }
      }

    </Consumer>
  );
}

Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func,
}

export default Counter;