import React, { Fragment, useContext, useEffect } from 'react';
import Search from '../layouts/Search';
import discussContext from '../../context/discuss/discussContext';
import authContext from '../../context/auth/authContext';

const Home = () => {
  const { loadUser } = useContext(authContext);
  useEffect(() => {
    if (localStorage.getItem('token')) loadUser(); //eslint-disable-next-line;
  }, []);
  const { details } = useContext(discussContext);
  return (
    <Fragment>
      <Search />
    </Fragment>
  );
};

export default Home;
