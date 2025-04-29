import React, { useReducer } from 'react'
import { questionsSelect } from '../../utils/QuestionsSelect/questionsSelect'
import {
  INITIAL_GAME_STATE,
  reducerGameData
} from '../../utils/GameReducer/GameReducer.reducer'
import QuestionsDisplay from '../../components/QuestionsDisplay/QuestionsDisplay'
import PresentationFreeMode from '../../components/PresentationFreeMode/PresentationFreeMode'

const FreePlay = () => {
  const [state, dispatch] = useReducer(reducerGameData, INITIAL_GAME_STATE)
  const preguntas = questionsSelect('free')

  return (
    <section className='game-section'>
      {state.started ? (
        <QuestionsDisplay questions={preguntas} mode={'free'} />
      ) : (
        <PresentationFreeMode dispatch={dispatch} />
      )}
    </section>
  )
}

export default FreePlay
