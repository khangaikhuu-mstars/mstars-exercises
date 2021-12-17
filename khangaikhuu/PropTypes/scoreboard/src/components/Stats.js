import React from 'react';
import PropTypes from 'prop-types';

const Stats = (props) => {
 
  const totalPlayers = props.players.length;
  const totalPoints = props.players.reduce( (total, player) => {
    return total + player.score;
  }, 0);

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{ totalPlayers }</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{ totalPoints }</td>
        </tr>
      </tbody>
    </table>
  );
}

Stats.propTypes = {
  props: PropTypes.shape({
    players: PropTypes.arrayOf(PropTypes.objectOf({
      score: PropTypes.number.isRequired
    }))
  })
}

export default Stats;