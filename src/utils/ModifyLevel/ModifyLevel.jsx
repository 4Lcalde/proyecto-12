import { useNavigate } from 'react-router-dom'
import { selectDificulty } from '../../data/info/info'
import './ModifyLevel.css'
import React, { useRef } from 'react'
import { changeDificulty } from '../changeDificulty/changeDificulty'

const ModifyLevel = ({ isOpen, closeModal }) => {
  const refInput = useRef()
  const navigate = useNavigate()

  if (!isOpen) return null

  return (
    <>
      <dialog open={isOpen} id='modal-modify-level'>
        <span onClick={closeModal}>X</span>
        <div className='div-modify-level'>
          <label htmlFor='level' className='h3-global-title'>
            ¿En qué modo quieres jugar?
          </label>
          <div className='div-modify-options'>
            <select ref={refInput} name='level' id='level'>
              {selectDificulty.map((dificulty) => (
                <option key={dificulty.value} value={dificulty.value}>
                  {dificulty.text}
                </option>
              ))}
            </select>
            <div className='buttons-container'>
              <button
                className='secundary-button'
                onClick={() => {
                  changeDificulty(refInput.current.value, navigate)
                }}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default ModifyLevel
