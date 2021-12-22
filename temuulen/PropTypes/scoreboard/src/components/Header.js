import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';
import PropTypes from 'prop-types';

<<<<<<< HEAD
const Header = ({ players, title }) => {
  return (
    <header>
      <Stats players={players} />
=======
const Header = ({ title }) => {
  return (
    <header>
      <Stats />
>>>>>>> 85d14a3aa4f04b662e91059723db15658e405142
      <h1>{ title }</h1>
      <Stopwatch />
    </header>
  );
}

Header.propTypes = {
<<<<<<< HEAD
  players: PropTypes.arrayOf(PropTypes.object),
=======
>>>>>>> 85d14a3aa4f04b662e91059723db15658e405142
  title: PropTypes.string,
}

Header.defaultProps = {
  title: 'Scoreboard'
}

export default Header;