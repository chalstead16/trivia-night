import React from 'react';
import { Link } from 'react-router-dom';
import './NoGame.css';

const NoGame = () => {
  return (
    <div className='no-game-container'>
      <div className='text-container'>
      <p>Oops! Looks like you haven't added questions to your game. Please return to home to add questions!</p>
      </div>
      <Link to='/'>
      <button>home</button>
      </Link>
    </div>
  )
}

export default NoGame;