import React from "react";
import "./Game.css";
import Questions from "../Questions/Questions";
import GameQuestionCard from "../GameQuestionCard/GameQuestionCard";
import NoGame from "../NoGame/NoGame";
import { GameProps as GameProps } from '../../utilities/utilities';

const Game = ({ game, removeFromGame }: GameProps): JSX.Element => {

 
  const gameQuestions = game.map(gameQuestion => {
    return (
        <GameQuestionCard 
        key={gameQuestion.id}
        removeFromGame={removeFromGame}
        {...gameQuestion}
        />
    )
  })
  return (
    <div className='game-container'>
      {gameQuestions.length === 0 ? <NoGame /> : gameQuestions}
    </div>
  )
}

export default Game;