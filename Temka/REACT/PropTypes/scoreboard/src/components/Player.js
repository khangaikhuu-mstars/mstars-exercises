import React, { PureComponent } from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types'
<<<<<<< HEAD
=======
import { Consumer } from './Context';
>>>>>>> 85d14a3aa4f04b662e91059723db15658e405142

class Player extends PureComponent {


  static propTypes ={
<<<<<<< HEAD
    changeScore: PropTypes.func.isRequired,
=======
    // changeScore: PropTypes.func.isRequired,
>>>>>>> 85d14a3aa4f04b662e91059723db15658e405142
    removePlayer: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
  }

  render() {
<<<<<<< HEAD
    
=======
>>>>>>> 85d14a3aa4f04b662e91059723db15658e405142
    const { 
      name,
      id,
      score,
      index,
<<<<<<< HEAD
      removePlayer,
      changeScore
=======
      removePlayer
>>>>>>> 85d14a3aa4f04b662e91059723db15658e405142
    } = this.props;


    return (
      <div className="player">
<<<<<<< HEAD
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          { name }
        </span>
  
        <Counter 
          score={score}
          index={index}
          changeScore={changeScore} 
=======
        <Consumer>{
          context=>(
            <span className="player-name">
              <button className="remove-player" onClick={() => context.actions.removePlayer(id)}>✖</button>
              {name}
            </span>
          )
          }
        </Consumer>
      
        <Counter 
          score={score}
          index={index}
>>>>>>> 85d14a3aa4f04b662e91059723db15658e405142
        />
      </div>
    );
  }
}

export default Player;