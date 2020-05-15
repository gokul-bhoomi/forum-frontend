import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icons, title }) => {
  return (
    <nav className='navbar bg-form'>
      <h1>Aggregate | A forum for all</h1>
      <ul>
        <li>
          <a href='/register' style={{ color: 'black' }}>
            {' '}
            <b> Register </b>
          </a>
        </li>
        <li>
          <a href='/login' style={{ color: 'black' }}>
            {' '}
            <b> Login </b>
          </a>
        </li>
      </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  title: 'Github Finder',
  icons: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
