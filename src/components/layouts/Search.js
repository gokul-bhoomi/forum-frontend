import React, { Fragment, useState } from 'react';
import logo from './logo.jpg';

const Search = () => {
  const initialState = '';

  const [state, setstate] = useState(initialState);

  const onChange = (e) => {
    setstate(e.target.value);
  };

  return (
    <Fragment>
      <img src={logo} className='logo' />
      <div className='container'>
        <form className='form'>
          <input
            type='text'
            placeholder='Enter text to search...'
            value={state}
            onChange={onChange}
          />
          <b>
            <input
              type='submit'
              value='Search'
              className='search btn-search btn-block'
            />
          </b>
        </form>
      </div>
    </Fragment>
  );
};

export default Search;
