import React, { Fragment, useState, useContext } from 'react';
import logo from '../../media/logo.jpg';
import discussContext from '../../context/discuss/discussContext';

const Search = () => {
  const DiscussContext = useContext(discussContext);
  const { getDetails } = DiscussContext;

  const [state, setstate] = useState('');

  const onChange = (e) => {
    setstate(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getDetails(e.target.value);
  };

  return (
    <Fragment>
      <img src={logo} className='logo' alt='logo' />
      <div className='container'>
        <form className='form'>
          <input type='text' value={state} onChange={onChange} />

          <b>
            <input
              type='submit'
              value='Search'
              className='search btn-search btn-block'
              onClick={onSubmit}
            />
          </b>
        </form>
      </div>
    </Fragment>
  );
};

export default Search;
