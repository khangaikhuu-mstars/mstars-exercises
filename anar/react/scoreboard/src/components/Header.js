import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';
import PropTypes from 'prop-types';
// import { Consumer } from './context';

const Header = ({ title }) => {
  return (
    // <Consumer>
      <header>
        <Stats />
        <h1>{title}</h1>
        <Stopwatch />
      </header>
    // </Consumer>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

Header.defautProps = {
  title: 'Scoreboard'
}

export default Header;