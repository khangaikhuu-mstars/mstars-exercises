import React, { PureComponent } from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';

class Player extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    removePlayer: PropTypes.func.isRequired
  }
  render() {
    
    const { 
      name,
      id,
      score,
      index,
      removePlayer
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
        />
      </div>
    );
  }
}


export default Player;