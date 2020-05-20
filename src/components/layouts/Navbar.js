import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import authContext from '../../context/auth/authContext';

const Navbar = () => {
  const { isAuthenticated, logout, user } = useContext(authContext);
  const onClick = (props) => {
    logout();
  };
  return (
    <nav className='navbar bg-form'>
      <Link to='/' className='title'>
        {' '}
        <h1>Aggregate | A forum for all</h1>{' '}
      </Link>

      <ul>
        <li>
          <Link to='/post' style={{ color: 'black' }}>
            {' '}
            <b> Post </b>
          </Link>
        </li>
        {isAuthenticated ? (
          <Fragment>
            <li>
              {' '}
              <b>
                {' '}
                <Link to='/myposts' style={{ color: 'black' }}>
                  My Posts
                </Link>{' '}
              </b>
            </li>
            <li>
              {' '}
              <b> {user ? user.name : ''} </b>
              <Link style={{ color: 'black' }} onClick={onClick}>
                <i class='fa fa-sign-out' aria-hidden='true'></i>
              </Link>
            </li>
          </Fragment>
        ) : (
          <Fragment>
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
          </Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
