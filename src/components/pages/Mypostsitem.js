import React, { useState, useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import authContext from '../../context/auth/authContext';

const Mypostsitem = ({
  id,
  name,
  topic,
  commentstotal,
  likes,
  users,
  deletePost,
  date,
}) => {
  const mystyle = {
    textAlign: 'center',
    paddingTop: '10px',
    paddingBottom: '10px',
  };
  const initialState = {
    loading: false,
    mouse: false,
  };
  const onClick = () => {
    deletePost(id);
  };
  const [state, setstate] = useState(initialState);
  const { user } = useContext(authContext);
  return (
    <Fragment>
      <div
        className='card bg-light'
        onMouseEnter={() => setstate({ mouse: true })}
        onMouseLeave={() => setstate({ mouse: false })}
        style={{ float: 'left' }}
      >
        {state.mouse ? (
          <Link to={`/discussforum/${id}`}>
            <h4 className='center'>Open</h4>
          </Link>
        ) : (
          <div>
            <p className='card-topleft'>Posted by: {name}</p>
            <h3 style={mystyle}>{topic}</h3>
            <p className='card-topright'>On : {date.substr(4, 11)}</p>
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
        {users === user._id && (
          <div style={{ cursor: 'pointer' }}>
            <i class='far fa-trash-alt' onClick={onClick}></i>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Mypostsitem;
