import { rules } from '../../data/info/info'
import './Presentation.css'

const Presentation = ({ dispatch }) => {
  return (
    <>
      <div className='presentation-container'>
        <h2 className='h2-global-title'>Bienvenido a la ronda de preguntas</h2>
        <h3 className='h3-global-title'>
          Aquí es donde demostrarás tus conocimientos.{' '}
        </h3>
        <div>
          <h4 className='h4-global-title'>Las reglas son sencillas:</h4>
          <ul>
            <li className='p-global'>
              Has seleccionado jugar en nivel
              <span>
                {JSON.parse(localStorage.getItem('dataUserTrivial')).level ||
                  'mixed'}
              </span>
            </li>

            {rules.map((rule) => (
              <li key={rule.index} className='p-global'>
                {rule.text}
              </li>
            ))}
          </ul>
        </div>
        <button
          id='button-start'
          className='general-button'
          onClick={() => dispatch({ type: 'START' })}
        >
          Comenzar
        </button>
      </div>
    </>
  )
}

export default Presentation
