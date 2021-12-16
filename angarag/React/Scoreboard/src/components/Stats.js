import React from 'react';

import PropTypes from 'prop-types'
import { Consumer } from './context';

const Stats = () => {


  return (
    <Consumer>
      {context => {
        const totalPlayers = context.player.length;
        const totalPoints = context.player.reduce((total, player) => {
          return total + player.score;
        }, 0);

        return (
          <table className="stats">
            <tbody>
              <tr>
                <td>Players:</td>
                <td>{totalPlayers}</td>
              </tr>
              <tr>
                <td>Total Points:</td>
                <td>{totalPoints}</td>
              </tr>
            </tbody>
          </table>
        );
      }}
    </Consumer>
  )

}
Stats.propTypes = {
  props: PropTypes.shape({
    player: PropTypes.arrayOf(PropTypes.objectOf({
      socre: PropTypes.number.isRequired
    })),
  })
}

export default Stats;