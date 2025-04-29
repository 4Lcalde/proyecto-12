import './Game.css'
import React, { useReducer } from 'react'
import { questionsSelect } from '../../utils/QuestionsSelect/questionsSelect.js'
import Presentation from '../../components/Presentation/Presentation.jsx'
import QuestionsDisplay from '../../components/QuestionsDisplay/QuestionsDisplay.jsx'
import {
  INITIAL_GAME_STATE,
  reducerGameData
} from '../../utils/GameReducer/GameReducer.reducer.js'

const Game = () => {
  const [state, dispatch] = useReducer(reducerGameData, INITIAL_GAME_STATE)

  const preguntas = questionsSelect(
    JSON.parse(localStorage.getItem('dataUserTrivial')).level
  )

  return (
    <section className='game-section'>
      {state.started ? (
        <QuestionsDisplay questions={preguntas} />
      ) : (
        <Presentation dispatch={dispatch} />
      )}
    </section>
  )
}

export default Game
