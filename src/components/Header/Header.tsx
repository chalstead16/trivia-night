
import './Header.css';
import React from 'react';
import { Route, Link } from 'react-router-dom';

const Header = (): JSX.Element => {

  return (
    <div className='header-container'>
      <div className='title'>
        <Link to='/' style={{color:"#D7632F", textDecoration:"none"}}>Trivia Night</Link>
      </div>
      <div className='welcome-message'>
        <h3>Create your Trivia Game with Trivia Night!</h3>
        <p>Select from the categories below to view trivia questions. Save questions to your game by clicking "Add to Game". To view your game, select "View Game".</p>
      </div>
      <div className='header-button-container'>
        <Link to='/'>
          <button className='view-categories'>Categories</button>
        </Link>
        <Link to='/game'>
          <button className='view-game'>View Game</button>
        </Link>
      </div>
    </div>
  )
}

export default Header;
