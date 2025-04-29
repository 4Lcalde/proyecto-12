import React from 'react'

const PresentationFreeMode = ({ dispatch }) => {
  return (
    <div className='presentation-container'>
      <h2 className='h2-global-title'>Bienvenido al modo libre</h2>
      <h3 className='h3-global-title'>Juguemos sin restricciones</h3>
      <div>
        <h4 className='h4-global-title'>
          Aquí puedes practicar y estudiar sin límites
        </h4>
      </div>
      <button
        id='button-start'
        className='general-button'
        onClick={() => dispatch({ type: 'START' })}
      >
        Comenzar
      </button>
    </div>
  )
}

export default PresentationFreeMode
