import React from 'react';
import { Link } from 'react-router-dom';
import './Error404.css';

const Error404 = () => {
  return (
    <div className='error-container'>
      <div className='title'>
        <Link to='/' style={{color:"#D7632F", textDecoration:"none"}}>Trivia Night</Link>
      </div>
      <p>Page not found. Please return to <Link to='/'>home</Link>.</p>
    </div>
  )
}

export default Error404;