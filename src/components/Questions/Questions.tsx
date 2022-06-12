import React from 'react';
import QuestionCard from '../QuestionCard/QuestionCard'
import { QuestionsComponent as QuestionsProps} from '../../utilities/utilities';
import './Questions.css'

const Questions = ({ questionsProp, addToGame, removeFromGame }: QuestionsProps) : JSX.Element => {
  
  const questionCards = questionsProp.map(question => {
    if(!question.difficulty) {
      question.difficulty = "easy"
    }

    return (
          <QuestionCard
            addToGame={addToGame}
            removeFromGame={removeFromGame}
            key={question.id}
            {...question}
          />
    )
  })

  return (
    <div className='questions-container'>
      {questionCards}
    </div>
  )
}

export default Questions;
