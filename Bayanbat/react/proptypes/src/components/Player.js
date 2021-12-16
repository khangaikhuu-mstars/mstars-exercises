import React, { PureComponent } from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';
import { Consumer } from './context'


class Player extends PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,

  }
  render() {
    return (
      <Consumer>
        {context => {
          const {
            name,
            id,
            score,
            index,
          } = this.props;
          return (
            <div className="player">
              <span className="player-name">
                <button className="remove-player" onClick={() => context.removePlayer(id)}>✖</button>
                {name}
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
  }
}
export default Player;