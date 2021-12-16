import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';
import PropTypes from 'prop-types'

const Header = ({ players, title }) => {
  return (
    <header>
      <Stats players={players} />
      <h1></h1>
      <Stopwatch />
    </header>
  );
}

Header.propTypes = {
  index: PropTypes.number,
  score: PropTypes.arrayOf(PropTypes.object)
}
Header.defaultProps = {
  title: 'Scoreboard'
}

export default Header;