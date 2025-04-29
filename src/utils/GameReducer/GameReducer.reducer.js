import { createContext } from 'react'

const userContext = createContext()

export const INITIAL_GAME_STATE = {
  started: false,
  currentQuestion: {},
  score: 0,
  indexCurrentQuestion: 0,
  selectedanswer: null,
  chrono: true,
  time: 10,
  answered: false
}

export const reducerGameData = (state, action) => {
  switch (action.type) {
    case 'START':
      return {
        ...state,
        started: true
      }

    case 'WELL_DONE':
      return {
        ...state,
        score: state.score + 1,
        indexCurrentQuestion: state.indexCurrentQuestion + 1,
        selectedanswer: null,
        time: 10,
        answered: false
      }

    case 'ERROR':
      return {
        ...state,
        indexCurrentQuestion: state.indexCurrentQuestion + 1,
        selectedanswer: null,
        time: 10,
        answered: false
      }

    case 'SELECTED':
      return {
        ...state,
        selectedanswer: action.payload,
        answered: true
      }

    case 'START_TIME':
      return {
        ...state,
        indexCurrentQuestion: state.indexCurrentQuestion + 1,
        chrono: true,
        time: 10,
        answered: false
      }

    case 'END_TIME':
      return {
        ...state,
        chrono: false,
        time: 10
      }

    case 'TICK':
      return {
        ...state,
        time: state.time - 1
      }

    default:
      return state
  }
}
