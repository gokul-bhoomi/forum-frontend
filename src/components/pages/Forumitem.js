import React, { useState, Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import authContext from '../../context/auth/authContext';

const Forumitem = ({
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
  const [state, setstate] = useState(initialState);
  const { user } = useContext(authContext);
  const onClick = () => {
    deletePost(id);
  };
  return (
    <Fragment>
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
            <p className='card-topright'>On: {date.substr(4, 11)}</p>

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
    </Fragment>
  );
};

export default Forumitem;
