import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';
import Proptypes from 'prop-types';

const Header = ({title }) => {
  return (
    <header>
      <Stats/>
      <h1>{ title }</h1>
      <Stopwatch />
    </header>
  );
}
Header.propTypes = {
  title: Proptypes.string,
}
Header.defaultProps = {
  title: 'Scoreboard'
}

export default Header;