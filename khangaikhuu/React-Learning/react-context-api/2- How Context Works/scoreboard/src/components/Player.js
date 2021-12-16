import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import { Consumer } from './Context/';

class Player extends PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
  };

  render() {
    
    const { 
      name,
      id,
      index,
    } = this.props;

    
    return (
      <div className="player">
        <Consumer> 
          { ({ actions }) => (
          <span className="player-name">
            <button className="remove-player" onClick={() => actions.removePlayer(id)}>✖</button>
            { name }
          </span>
          )}
          
        </Consumer>
  
        <Counter 
          index={index}/>
      </div>
    );
  }
}

export default Player;
