import React, { useState } from 'react';

const Commentitem = ({ item }) => {
  const mystyle = {
    textAlign: 'center',
    paddingTop: '10px',
    paddingBottom: '10px',
  };

  return (
    <div className='card bg-primary'>
      <p className='card-topleft'>Posted by: {item.name}</p>
      <p className='card-topright'>On: {item.date.substr(4, 11)}</p>
      <h3 style={mystyle}>{item.text}</h3>
    </div>
  );
};

export default Commentitem;
