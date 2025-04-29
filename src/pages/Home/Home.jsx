import { NavLink } from 'react-router-dom'
import './Home.css'
import React from 'react'

const Home = () => {
  const name = JSON.parse(localStorage.getItem('dataUserTrivial')).name
  return (
    <section id='home-section'>
      <h1 className='home-title'>
        Un placer tenerte por aquí, <span>{name}</span>
      </h1>
      <article className='article-home'>
        <NavLink to='/play'>
          <h3 className='title-article-home'>
            ¿Te atreves a demostrar cuanto sabes?
          </h3>
          <div className='player-container'>
            <img className='img-home' src='/assets/cards/tablero.jpg' alt='' />
            <h3 className='subtitle-article-home'>Juega</h3>
          </div>
        </NavLink>
      </article>

      <article className='article-home'>
        <NavLink to='freeplay'>
          <h3 className='title-article-home reverse'>Juega al modo libre</h3>
          <div className='player-container'>
            <img className='img-home' src='/assets/cards/freeMode.jpg' alt='' />
            <h3 className='subtitle-article-home'>Modo libre</h3>
          </div>
        </NavLink>
      </article>
    </section>
  )
}

export default Home
