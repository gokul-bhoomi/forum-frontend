import React, { useContext, Fragment } from 'react';
import discussContext from '../../context/discuss/discussContext';
import Forumitems from './Forumitem';

const Forum = () => {
  const { clearState, details } = useContext(discussContext);

  const onClick = () => {
    clearState();
  };

  return (
    <Fragment>
      <div className='container'>
        {details.map((items) => (
          <Forumitems item={items} />
        ))}
        <button onClick={onClick} className='btn btn-dark'>
          Back to Search
        </button>
      </div>
    </Fragment>
  );
};

export default Forum;
