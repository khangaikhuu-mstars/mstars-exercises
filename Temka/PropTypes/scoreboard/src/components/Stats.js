import React from 'react';
import PropTypes, { arrayOf, objectOf } from 'prop-types';
<<<<<<< HEAD

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
=======
import { Consumer } from './Context';

const Stats = () => {

return(
  <Consumer>
    { context =>{
      const totalPlayers = context.players.length;
      const totalPoints = context.players.reduce( (total, player) => {
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
      }
  </Consumer>
)
 


>>>>>>> 85d14a3aa4f04b662e91059723db15658e405142
}


Stats.propTypes = {
  props : PropTypes.shape({
    players : PropTypes.arrayOf(PropTypes.objectOf({
      score: PropTypes.number.isRequired
    }))
  })

}

export default Stats;