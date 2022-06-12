import React, {useState} from 'react';
import { GameCardProps as GameCardProps } from '../../utilities/utilities';
import '../QuestionCard/QuestionCard.css'

const GameQuestionCard = ({category, question, correctAnswer, incorrectAnswers, difficulty, removeFromGame, id }: GameCardProps) : JSX.Element => {

  return (
    <div className='game-card'>
      <h2>{category}</h2>
      <p>{question}</p>
      <p><b>Correct Answer</b>: {correctAnswer}</p>
      <p><b>Incorrect Answers</b>: {incorrectAnswers.join(', ')}</p>
      <p><b>Difficulty</b>: {difficulty}</p>

      <button
        className='delete-button'
        onClick={() => removeFromGame(id)}
      >
        X
      </button>
    </div>
  )
}

export default GameQuestionCard;
