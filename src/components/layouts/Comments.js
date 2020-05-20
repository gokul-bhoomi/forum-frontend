import React, { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import Commentitems from './Commentitem';

import discussContext from '../../context/discuss/discussContext';
import authContext from '../../context/auth/authContext';
import alertContext from '../../context/alert/alertContext';

const Comments = () => {
  const { current, incrementLike, decrementLike, getForum } = useContext(
    discussContext
  );
  const { loadUser, isAuthenticated, user, updateLikes } = useContext(
    authContext
  );
  const { setAlert } = useContext(alertContext);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
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
      />{' '}
      <input type='submit' value='Discuss' className='btn btn-primary' />
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
                to='/list'
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
