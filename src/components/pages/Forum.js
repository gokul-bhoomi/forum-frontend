import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import discussContext from '../../context/discuss/discussContext';
import Forumitems from './Forumitem';

const Forum = () => {
  const { clearState, details, setCurrent } = useContext(discussContext);

  const onClick = () => {
    clearState();
  };

  return (
    <Fragment>
      <div className='container'>
        {details.map((items) => (
          <Forumitems item={items} setCurrent={setCurrent} />
        ))}
        <Link to='/'>
          {' '}
          <button onClick={onClick} className='btn btn-dark'>
            Back to Search
          </button>{' '}
        </Link>
      </div>
    </Fragment>
  );
};

export default Forum;
