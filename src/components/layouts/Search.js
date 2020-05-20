import React, { Fragment, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../media/logo.jpg';
import discussContext from '../../context/discuss/discussContext';
import alertContext from '../../context/alert/alertContext';

const Search = () => {
  const DiscussContext = useContext(discussContext);
  const { getDetails, text, setText } = DiscussContext;

  const { setAlert } = useContext(alertContext);
  const history = useHistory();

  const onChange = (e) => {
    setText(e.target.value);
    localStorage.setItem('text', e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert(' No text Entered', 'danger');
    } else {
      history.push('/list');
      getDetails(text);
    }
  };

  return (
    <Fragment>
      <img src={logo} className='logo' alt='logo' />
      <div className='container'>
        <form className='form'>
          <input
            type='text'
            value={text}
            onChange={onChange}
            className='text'
          />

          <b>
            <button className='search btn-search btn-block' onClick={onSubmit}>
              Search
            </button>
          </b>
        </form>
      </div>
    </Fragment>
  );
};

export default Search;
