import { useNavigate } from 'react-router-dom'
import { selectDificulty } from '../../data/info/info'
import './ModifyLevel.css'
import React, { useRef } from 'react'
import { changeDificulty } from '../changeDificulty/changeDificulty'
import UseCloseElements from '../../Custom/CloseElements/CloseElements'

const ModifyLevel = ({ isOpen, setIsOpen, closeModal }) => {
  const refInput = useRef()
  const navigate = useNavigate()
  const refDialog = useRef()
  UseCloseElements(open, setIsOpen, refDialog)
  if (!isOpen) return null

  return (
    <>
      <dialog open={isOpen} id='modal-modify-level' ref={refDialog}>
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
