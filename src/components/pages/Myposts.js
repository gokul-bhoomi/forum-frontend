import React, { useContext, Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import discussContext from '../../context/discuss/discussContext';
import Mypostssitem from './Mypostsitem';
import Spinner from '../layouts/Spinner';
import authContext from '../../context/auth/authContext';

const Forum = () => {
  const {
    myposts,
    setCurrent,
    loading,
    setLoading,
    getmyposts,
    deletePost,
  } = useContext(discussContext);
  useEffect(() => {
    if (localStorage.getItem('token')) loadUser();
    getmyposts();

    //eslint-disable-next-line;
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  const pageNumbers = [];
  const { loadUser, isAuthenticated } = useContext(authContext);

  var currentPosts = [];
  if (isAuthenticated && myposts) {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    currentPosts = myposts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPosts = myposts.length;
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  }

  const paginate = (pageNumber) => {
    setLoading(true);
    setCurrentPage(pageNumber);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  return (
    <Fragment>
      {isAuthenticated && myposts ? (
        <Fragment>
          {loading ? (
            <Spinner />
          ) : (
            <div className='container'>
              {currentPosts.map((items) => (
                <Mypostssitem
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
              {myposts.length === 0 ? (
                <h2 style={{ textAlign: 'center' }}> No Forum Found </h2>
              ) : (
                ''
              )}
              <Link to='/'>
                {' '}
                <button className='btn btn-dark' style={{ float: 'left' }}>
                  Back to Search
                </button>{' '}
              </Link>

              <nav>
                <ul className='pagination'>
                  {pageNumbers.map((number) => (
                    <li key={number} className=''>
                      <Link
                        onClick={() => paginate(number)}
                        to='/myposts'
                        className={currentPage === number ? 'active' : ''}
                      >
                        {number}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}{' '}
        </Fragment>
      ) : (
        <h2 style={{ textAlign: 'center' }}> Please Login</h2>
      )}
    </Fragment>
  );
};

export default Forum;
