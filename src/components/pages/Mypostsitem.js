import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Mypostsitem = ({ id, name, topic, commentstotal, likes }) => {
  const mystyle = {
    textAlign: 'center',
    paddingTop: '10px',
    paddingBottom: '10px',
  };
  const initialState = {
    loading: false,
    mouse: false,
  };
  const [state, setstate] = useState(initialState);

  return (
    <div
      className='card bg-light'
      onMouseEnter={() => setstate({ mouse: true })}
      onMouseLeave={() => setstate({ mouse: false })}
    >
      {state.mouse ? (
        <Link to={`/discussforum/${id}`}>
          <h4 className='center'>Open</h4>
        </Link>
      ) : (
        <div>
          <p className='card-topleft'>Posted by: {name}</p>
          <h3 style={mystyle}>{topic}</h3>

          <div className='like'>
            <i class='fas fa-comment'></i>{' '}
            <i style={{ paddingRight: '5px', paddingLeft: '0px' }}>
              {commentstotal}
            </i>
            <i class='fas fa-heart'></i>{' '}
            <i style={{ paddingRight: '5px', paddingLeft: '0px' }}>{likes}</i>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mypostsitem;
