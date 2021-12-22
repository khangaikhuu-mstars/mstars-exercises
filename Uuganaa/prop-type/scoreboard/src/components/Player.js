import React, { PureComponent } from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types'
import { Consumer } from './context ';



class Player extends PureComponent {
  static propTypes ={
    removePlayer: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
  }
  render() {
    
    const { 
      name,
      id,
      score,
      index,
    } = this.props;
    return(
      <Consumer>
        {context =>{
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => context.actions.removePlayer(id)}>✖</button>
          { name }
        </span>
  
        <Counter 
          score={score}
          index={index} 
        />
      </div>
    );
  }}
    </Consumer>
    )
}}

export default Player;