import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './context';

const Stats = () => {

  return (
    <Consumer>
      {context => {
        const totalPlayers = context.players.length;
        const totalPoints = context.players.reduce((total, player) => {
          return total + player.score;
        }, 0);
<<<<<<< HEAD
=======
        const highScore = context.highScore;
>>>>>>> 6ee0dd4d7d64c5444294cbc9429cf6c8ebb99b02
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
<<<<<<< HEAD
=======
              <tr>
                <td>Highest Point:</td>
                <td>{highScore}</td>
              </tr>
>>>>>>> 6ee0dd4d7d64c5444294cbc9429cf6c8ebb99b02
            </tbody>
          </table>
        );
      }}
    </Consumer>
  )
};

Stats.propTypes = {
  props: PropTypes.shape({
    players: PropTypes.arrayOf(PropTypes.objectOf({
      score: PropTypes.number.isRequired
    }))
  })
}

export default Stats;