import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  const showSpinner = () => {
    setTimeout(() => {}, 10000);
  };
  return (
    <Fragment>
      <img
        src={spinner}
        alt='Loading...'
        style={{
          height: '30%',
          width: '30%',
          margin: 'auto',
          display: 'block',
        }}
      />
      {showSpinner()}
    </Fragment>
  );
};

export default Spinner;
