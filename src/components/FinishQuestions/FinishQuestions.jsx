import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './FinishQuestions.css'
import ModifyLevel from '../../utils/ModifyLevel/ModifyLevel'

const FinishQuestions = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const score = location.state?.score || 0

  const userName =
    JSON.parse(localStorage.getItem('dataUserTrivial'))?.name || 'Jugador'

  return (
    <section id='finish-section'>
      <article className='finish-section'>
        <h2 className='h2-global-title'>
          Enhorabuena, {userName}. Has completado el desafío
        </h2>

        <h4 className='h4-global-title'>
          Tu puntuación ha sido de <span>{score}</span>
        </h4>

        <p className='p-global'>¿Quieres volver a jugar?</p>
        <div className='div-infoFinish-container'>
          <button className='general-button'>
            <Link to='/play'>Reiniciar</Link>
          </button>

          <button
            className='general-button'
            onClick={() => {
              setIsOpen(true)
            }}
          >
            Cambiar nivel
          </button>

          <button className='general-button'>
            <Link to='/'>Salir</Link>
          </button>
        </div>
        <ModifyLevel
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          closeModal={() => {
            setIsOpen(false)
          }}
        />
      </article>
    </section>
  )
}

export default FinishQuestions
