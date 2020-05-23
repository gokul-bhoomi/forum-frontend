import React, { useContext, Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import discussContext from '../../context/discuss/discussContext';
import Forumitems from './Forumitem';
import Spinner from '../layouts/Spinner';
import authContext from '../../context/auth/authContext';

const Forum = (props) => {
  const {
    details,
    setCurrent,
    loading,
    setLoading,
    getDetails,
    deletePost,
    text,
  } = useContext(discussContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  var currentPosts = [];
  const pageNumbers = [];

  if (details) {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    currentPosts = details.slice(indexOfFirstPost, indexOfLastPost);
    const totalPosts = details.length;

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  }
  const { loadUser } = useContext(authContext);

  useEffect(() => {
    if (localStorage.getItem('token')) loadUser();
    //eslint-disable-next-line;
  }, []);
  useEffect(() => {
    if (!text) props.history.push('/');

    if (!details) getDetails(text);
    //eslint-disable-next-line;
  }, []);

  const paginate = (pageNumber) => {
    setLoading(true);
    setCurrentPage(pageNumber);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };
  const onClick = () => {
    localStorage.setItem('text', '');
  };

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div className='container'>
          {currentPosts.map((items) => (
            <Forumitems
              id={items._id}
              name={items.name}
              topic={items.topic}
              likes={items.likes}
              commentstotal={items.commentstotal}
              setCurrent={setCurrent}
              users={items.user}
              deletePost={deletePost}
              date={items.datee}
            />
          ))}
          {details.length === 0 ? (
            <h2 style={{ textAlign: 'center' }}> No Forum Found </h2>
          ) : (
            ''
          )}
          <Link to='/'>
            {' '}
            <button
              className='btn btn-dark'
              style={{ float: 'left' }}
              onClick={onClick}
            >
              Back to Search
            </button>{' '}
          </Link>

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
        </div>
      )}
    </Fragment>
  );
};

export default Forum;
