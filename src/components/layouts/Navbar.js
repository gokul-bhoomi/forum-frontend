import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar bg-form'>
      <Link to='/' className='title'>
        {' '}
        <h1>Aggregate | A forum for all</h1>{' '}
      </Link>
      <ul>
        <li>
          <Link to='/register' style={{ color: 'black' }}>
            {' '}
            <b> Register </b>
          </Link>
        </li>
        <li>
          <Link to='/login' style={{ color: 'black' }}>
            {' '}
            <b> Login </b>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
