import React, { useEffect, useReducer, useState } from 'react'
import './QuestionsDisplay.css'
import {
  INITIAL_GAME_STATE,
  reducerGameData
} from '../../utils/GameReducer/GameReducer.reducer'
import Chrono from '../Chrono/Chrono'
import { useNavigate } from 'react-router-dom'

import usePersonalRecord from '../../Custom/PersonalRecord/PersonalRecord'
import QuestionsContainer from '../QuestionsContainer/QuestionsContainer'

const QuestionsDisplay = ({ questions, mode }) => {
  const score = localStorage.getItem('dataScoreTrivial')

  const [state, dispatch] = useReducer(reducerGameData, INITIAL_GAME_STATE)
  const [finalized, setFinalized] = useState(false)
  const navigate = useNavigate()
  const { record, updateRecord } = usePersonalRecord()

  useEffect(() => {
    if (state.indexCurrentQuestion === questions.length && !finalized) {
      setFinalized(true)
      updateRecord(state.score)
      navigate('/play/results', { state: { score: state.score } })
    }
  }, [state.indexCurrentQuestion, questions.length, finalized, navigate])

  useEffect(() => {
    if (state.selectedanswer !== null) {
      state.selectedanswer.value === true
        ? setTimeout(() => {
            dispatch({ type: 'WELL_DONE' })
          }, 500)
        : setTimeout(() => {
            dispatch({ type: 'ERROR' })
          }, 2000)
    }
  }, [state.selectedanswer])

  if (!questions || questions.length === 0) {
    return <p>No hay preguntas disponibles.</p>
  }

  const currentQuestion = questions[state.indexCurrentQuestion]
  if (!currentQuestion) return null

  const correctAnswer = currentQuestion.answers.find((answer) => answer.value)

  return (
    <>
      <Chrono
        chrono={state.chrono}
        time={state.time}
        answered={state.answered}
        dispatch={dispatch}
      />
      <QuestionsContainer
        currentQuestion={currentQuestion}
        state={state}
        correctAnswer={correctAnswer}
        score={score}
        mode={mode}
        dispatch={dispatch}
      ></QuestionsContainer>
    </>
  )
}

export default QuestionsDisplay
