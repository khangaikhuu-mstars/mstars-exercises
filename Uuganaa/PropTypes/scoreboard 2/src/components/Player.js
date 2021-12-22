import React, { PureComponent } from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';
import Stats from './Stats';
class Player extends PureComponent {
  static PropTypes = {
    changeScore: PropTypes.func,
    name: PropTypes.string,
    
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
    );
  }
}


export default Player;