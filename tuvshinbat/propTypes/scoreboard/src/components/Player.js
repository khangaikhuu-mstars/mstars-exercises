import React, { PureComponent } from 'react';
import Counter from './Counter';
import PropTypes from'prop-types';
class Player extends PureComponent {
static propTypes = {
  changeScore: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id : PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
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