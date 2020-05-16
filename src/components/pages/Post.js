import React, { useContext, Fragment, useEffect, useState } from 'react';
import discussContext from '../../context/discuss/discussContext';
import userContext from '../../context/user/userContext';
//import comment from '../layouts/comment';

const Post = () => {
  const { current, incrementLike, decrementLike } = useContext(discussContext);
  const { liked, addLikes, removeLikes } = useContext(userContext);
  const [state, setstate] = useState(false);
  useEffect(() => {
    liked.forEach((like) => {
      if (current.id === like) setstate(true);
    });
  }, [liked]);
  const onClick = () => {
    if (state === true) {
      removeLikes(current.id);
      console.log('A');
      //   decrementLike();
      setstate(false);
    } else {
      addLikes(current.id);

      console.log('B');
      incrementLike();
    }
  };

  return (
    <Fragment>
      <div className='post'>
        <b>
          <p style={{ paddingRight: '8px' }}>Posted by : {current.user}</p>
          <p
            style={{ textAlign: 'right', float: 'right', paddingRight: '5px' }}
          >
            On: 13/12/2000
          </p>
        </b>
        <h1 style={{ textAlign: 'center' }}>{current.topic}</h1>
      </div>
      <div className='post1'>
        {' '}
        <h4>{current.body} </h4>
        <div className='like'>
          <i class='fas fa-comment' />
          <i style={{ paddingRight: '5px', paddingLeft: '0px' }}>
            {current.comments}
          </i>
          <span onClick={onClick}>
            {' '}
            {state ? (
              <i class='fas fa-heart' />
            ) : (
              <i class='far fa-heart' />
            )}{' '}
          </span>
          <i style={{ paddingRight: '5px', paddingLeft: '0px' }}>
            {current.likes}
          </i>
        </div>
      </div>
      <div className='discuss'>
        CheckCheckCheckCheckCheckCheckCheckCheckCheckCheckCheckCheckCheckCheckCheckCheckCheckCheckCheckCheckCheckCheckCheckCheckCheckCheckCheckCheckCheckCheckCheckCheckCheckCheckCheckCheckCheckCheck
      </div>
    </Fragment>
  );
};

export default Post;
