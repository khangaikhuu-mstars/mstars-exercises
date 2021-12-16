import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';
import Proptypes from 'prop-types';

const Header = ({ players, title }) => {
  return (
    <header>
      <Stats players={players} />
      <h1>{ title }</h1>
      <Stopwatch />
    </header>
  );
}

Header.propTypes = {
  title: Proptypes.string,
  players: Proptypes.arrayOf(Proptypes.object)
}
Header.defaultProps = {
  title: 'Scoreboard'
}

export default Header;