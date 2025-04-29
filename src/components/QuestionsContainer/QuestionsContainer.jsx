import React from 'react'

const QuestionsContainer = React.memo(
  ({ currentQuestion, state, correctAnswer, score, mode, dispatch }) => {
    return (
      <div className={`presentation-container`}>
        <div className='div-main-info'>
          {' '}
          <h3 className='h3-global-title'>{currentQuestion.question}</h3>
          <h3> Pregunta {state.indexCurrentQuestion + 1}</h3>
        </div>

        <ul className={`ul-answer ${state.selectedanswer ? 'selected' : ''}`}>
          {currentQuestion.answers.map((answer) => (
            <li
              key={answer.ref}
              className={`li-answer ${
                state.selectedanswer && state.selectedanswer.ref === answer.ref
                  ? state.selectedanswer.value === true
                    ? 'correct'
                    : 'wrong'
                  : ''
              }`}
              onClick={() => dispatch({ type: 'SELECTED', payload: answer })}
            >
              {answer.text}
            </li>
          ))}
        </ul>

        {state.selectedanswer && state.selectedanswer.value === false && (
          <p className={`p-global ${currentQuestion.category}`}>
            La respuesta correcta es{' '}
            <span className={currentQuestion.category}>
              {correctAnswer.text}
            </span>
          </p>
        )}

        <div className='div-infoQuestions-container'>
          <p>Puntuación: {state.score}</p>
          <p className={`p-global ${currentQuestion.category}`}>
            Categoría: <span>{currentQuestion.category}</span>
          </p>

          {mode === 'free' ? (
            <p>Modo libre</p>
          ) : (
            <p>Record personal: {score}</p>
          )}
        </div>
      </div>
    )
  }
)

export default QuestionsContainer
