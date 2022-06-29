import React from 'react';
import { Link } from 'react-router-dom';
import './NoGame.css';

const NoGame = () => {
  return (
    <div className='no-game-container'>
      <p>Oops!</p>
      <p>Looks like you haven't added questions to your game.</p>
      <p>Please return to Categories to add questions!</p>
    </div>
  )
}

export default NoGame;