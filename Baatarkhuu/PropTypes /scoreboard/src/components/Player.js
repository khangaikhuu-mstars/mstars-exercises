<<<<<<< HEAD
import React, { PureComponent } from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types'

class Player extends PureComponent {
  static propTypes = {
    changeScore : PropTypes.func.isRequired,
    removePlayer : PropTypes.func.isRequired,
    name : PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    score : PropTypes.number.isRequired,
    index : PropTypes.number.isRequired
  }
  
  render() {
    
    const { 
      name,
      id,
      score,
      index,
      removePlayer,
      changeScore
    } = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          { name }
        </span>
  
        <Counter 
          score={score}
          index={index}
          changeScore={changeScore} 
        />
      </div>
=======
import React, { PureComponent } from "react";
import Counter from "./Counter";
import PropTypes from "prop-types";
import { Consumer } from "./Context";

class Player extends PureComponent {
  static propTypes = {
    // removePlayer: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
  };

  render() {
    const { name, id, score, index } = this.props;

    return (
      <Consumer>
        {(context) => {
          return (
            <div className="player">
              <span className="player-name">
                <button
                  className="remove-player"
                  onClick={() => context.actions.removePlayer(id)}
                >
                  ✖
                </button>
                {name}
              </span>

              <Counter score={score} index={index} />
            </div>
          );
        }}
      </Consumer>
>>>>>>> 6ee0dd4d7d64c5444294cbc9429cf6c8ebb99b02
    );
  }
}

<<<<<<< HEAD
export default Player;
=======
export default Player;
>>>>>>> 6ee0dd4d7d64c5444294cbc9429cf6c8ebb99b02
