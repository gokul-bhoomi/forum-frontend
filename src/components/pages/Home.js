import React, { Fragment, useContext } from 'react';
import Search from '../layouts/Search';
import Forum from './Forum';
import discussContext from '../../context/discuss/discussContext';

const Home = () => {
  const { details } = useContext(discussContext);
  return (
    <Fragment>
      {console.log(details.length)}
      <Search />
    </Fragment>
  );
};

export default Home;
