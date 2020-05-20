import React, { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import Commentitems from './Commentitem';

import discussContext from '../../context/discuss/discussContext';
import authContext from '../../context/auth/authContext';
import alertContext from '../../context/alert/alertContext';

const Comments = (props) => {
  const { current, addComment } = useContext(discussContext);
  const { loadUser, isAuthenticated, user, updateLikes } = useContext(
    authContext
  );
  const { setAlert } = useContext(alertContext);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const onClick = () => {
    if (isAuthenticated === false)
      setAlert('Please Login to comment', 'danger');
    else {
      if (comment === '') setAlert('Please enter something', 'danger');
      else addComment(comment, props.match.params.id);
    }
  };
  const onChange = (e) => {
    setcomment(e.target.value);
  };
  const [comment, setcomment] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  var currentPosts = [];
  var totalPosts = 0;
  if (current !== null) {
    currentPosts = current.comments.slice(indexOfFirstPost, indexOfLastPost);
    totalPosts = current.comments.length;
  }

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return isAuthenticated ? (
    <Fragment>
      <h2>
        <label htmlFor='textarea'>Discussion :</label>{' '}
      </h2>{' '}
      <br />
      <textarea
        id='textarea'
        placeholder='Type your Opinion....'
        name='body'
        onChange={onChange}
      />{' '}
      <input
        type='submit'
        value='Discuss'
        className='btn btn-primary'
        onClick={onClick}
      />
      <div>
        {currentPosts.map((items) => (
          <Commentitems item={items} />
        ))}
      </div>
      <nav>
        <ul className='pagination'>
          {pageNumbers.map((number) => (
            <li key={number} className=''>
              <Link
                onClick={() => paginate(number)}
                to={`/discussforum/${props.match.params.id}`}
                className={currentPage === number ? 'active' : ''}
              >
                {number}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Fragment>
  ) : (
    'Login to discuss'
  );
};

export default Comments;
