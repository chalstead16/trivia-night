import React, { useState, useEffect } from 'react';
import { CategoriesProps as CategoriesProp } from '../../utilities/utilities';
import fetchData from '../../apiCalls';
import { Route, Link, Switch } from 'react-router-dom';
import Questions from '../Questions/Questions';
import './Categories.css';

const Categories = ( { fetchCat }: CategoriesProp ) : JSX.Element => {

  return (
    <div className='button-container'>
        <Link to='/questions' className='category'>
          <button className='category-button'
          value={'arts_and_literature'}
          onClick={() => fetchCat('arts_and_literature')}>Arts & Literature</button>
        </Link>
        <Link to='/questions' className='category'>
          <button className='category-button'
          value={'film_and_tv'}
          onClick={() => fetchCat('film_and_tv')}>Film & TV</button>
        </Link>
        <Link to='/questions' className='category'>
          <button className='category-button'
          value={'food_and_drink'}
          onClick={() => fetchCat('food_and_drink')}>Food & Drink</button>
        </Link>
        <Link to='/questions' className='category'>
          <button className='category-button'
          value={'general_knowledge'}
          onClick={() => fetchCat('general-knowledge')}>General Knowledge</button>
        </Link>
        <Link to='/questions' className='category'>
          <button className='category-button'
          value={'geography'}
          onClick={() => fetchCat('geography')}>Geography</button>
        </Link>
        <Link to='/questions' className='category'>
          <button className='category-button'
          value={'history'}
          onClick={() => fetchCat('history')}>History</button>
        </Link>
        <Link to='/questions' className='category'>
          <button className='category-button'
          value={'music'}
          onClick={() => fetchCat('music')}>Music</button>
        </Link>
        <Link to='/questions' className='category'>
          <button className='category-button'
          value={'science'}
          onClick={() => fetchCat('science')}>Science</button>
        </Link>
        <Link to='/questions' className='category'>
          <button className='category-button'
          value={'society_and_culture'}
          onClick={() => fetchCat('society_and_culture')}>Society & Culture</button>
        </Link>
        <Link to='/questions' className='category'>
          <button className='category-button'
          value={'sport_and_leisure'}
          onClick={() => fetchCat('sport_and_leisure')}>Sports & Leisure</button>
        </Link>
      </div>
  )
}

export default Categories
