import { useNavigate } from 'react-router-dom'
import './LogOut.css'

import React from 'react'

const LogOut = () => {
  const navigate = useNavigate()

  const salir = () => {
    localStorage.clear()
    navigate('/')
    window.location.reload()
  }
  return (
    <section id='logOut-section'>
      <article className='article-logOut'>
        <h2 className='h2-global-title'>¿Deseas salir de la página?</h2>
        <div className='buttons-container'>
          <button className='red-button' onClick={() => salir()}>
            Salir
          </button>
          <button className='general-button' onClick={() => navigate('/')}>
            Volver al inicio
          </button>
        </div>
      </article>
    </section>
  )
}

export default LogOut
