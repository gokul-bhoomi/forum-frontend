import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Commentitem = ({ item }) => {
  const mystyle = {
    textAlign: 'center',
    paddingTop: '10px',
    paddingBottom: '10px',
  };

  return (
    <div className='card bg-light'>
      <p className='card-topleft'>Posted by: {item.user}</p>
      <h3 style={mystyle}>{item.body}</h3>
    </div>
  );
};

export default Commentitem;
