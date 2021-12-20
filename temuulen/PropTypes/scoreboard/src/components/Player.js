import React, { PureComponent } from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types'
<<<<<<< HEAD
=======
import { Consumer } from './Context';
>>>>>>> 85d14a3aa4f04b662e91059723db15658e405142

class Player extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
<<<<<<< HEAD
    index: PropTypes.number.isRequired,
    removePlayer: PropTypes.func.isRequired,
    changeScore: PropTypes.func.isRequired
=======
    index: PropTypes.number.isRequired
>>>>>>> 85d14a3aa4f04b662e91059723db15658e405142
  }

  render() {

<<<<<<< HEAD
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
    const {
      name,
      id,
      score,
      index
    } = this.props;

    return (
      <Consumer>
        {context => {
          return (
            <div className="player">
              <span className="player-name">
                <button className="remove-player" onClick={() => context.actions.removePlayer(id)}>✖</button>
                {name}
              </span>

              <Counter
                score={score}
                index={index}
              />
            </div>
          )
        }}
      </Consumer>
>>>>>>> 85d14a3aa4f04b662e91059723db15658e405142
    );
  }
}

export default Player;