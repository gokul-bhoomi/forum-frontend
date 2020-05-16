import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Forumitem = ({ item }) => {
  const mystyle = {
    textAlign: 'center',
    paddingTop: '10px',
    paddingBottom: '10px',
  };

  const [state, setstate] = useState(false);

  return (
    <div
      className='card bg-light'
      onMouseEnter={() => setstate(true)}
      onMouseLeave={() => setstate(false)}
    >
      {state ? (
        <Link to={`/post/${item.id}`}>
          <h4 className='center'>Open</h4>
        </Link>
      ) : (
        <div>
          <p className='card-topleft'>Posted by: {item.user}</p>
          <h3 style={mystyle}>{item.topic}</h3>

          <div className='like'>
            <i class='fas fa-comment'></i>{' '}
            <i style={{ paddingRight: '5px', paddingLeft: '0px' }}>
              {item.comments}
            </i>
            <i class='fas fa-heart'></i>{' '}
            <i style={{ paddingRight: '5px', paddingLeft: '0px' }}>
              {item.likes}
            </i>
          </div>
        </div>
      )}
    </div>
  );
};

export default Forumitem;