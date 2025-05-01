import React, { useReducer } from 'react'
import { useForm } from 'react-hook-form'
import { avatarProfiles, selectDificulty } from '../../../data/info/info'
import './FormLogin.css'

import {
  INITIAL_LOGIN_STATE,
  reducerLoginData
} from '../../../utils/LoginReducer/LoginReducer.reducer.JS'
import { useNavigate } from 'react-router-dom'

const FormLogin = () => {
  const [state, dispatch] = useReducer(reducerLoginData, INITIAL_LOGIN_STATE)
  const { valueName, valueLevel } = state
  const navigate = useNavigate()

  const { handleSubmit, register, formState } = useForm({
    defaultValues: {
      name: '',
      level: ''
    }
  })

  const onSubmit = (values) => {
    localStorage.setItem('dataUserTrivial', JSON.stringify(values))
    localStorage.setItem('dataScoreTrivial', 0)
    navigate(0)
  }

  return (
    <form id='form-login' onSubmit={handleSubmit(onSubmit)}>
      <h2 className='h2-global-title'>Cuentanos algo sobre tí</h2>

      {/* Nombre */}
      <div className='div-login-element'>
        <label htmlFor='name'>¿Cuál es tu nombre?</label>
        <input
          className={valueName ? 'open' : 'close'}
          type='text'
          id='name'
          {...register('name', {
            required: { value: true, message: 'Necesitamos saber tu nombre' },
            minLength: { value: 2, message: 'Escribe al menos 2 caracteres' },
            maxLength: {
              value: 15,
              message: 'No pongas más de 15 caracteres'
            }
          })}
        />
        {formState.errors.name && (
          <p className='p-error'>{formState.errors.name.message}</p>
        )}
        <button
          className='add-info'
          type='button'
          onClick={() => dispatch({ type: 'CHANGE_NAME' })}
        >
          {valueName ? '-' : '+'}
        </button>
      </div>

      {/* Nivel */}
      <div className='div-login-element'>
        <label htmlFor='level'>¿En qué modo quieres jugar?</label>
        <select
          className={valueLevel ? 'open' : 'close'}
          id='level'
          aria-placeholder='Selecciona'
          {...register('level', {
            required: {
              value: true,
              message: 'Selecciona una dificultad para jugar'
            }
          })}
        >
          {selectDificulty.map((dificulty) => (
            <option key={dificulty.value} value={dificulty.value}>
              {dificulty.text}
            </option>
          ))}
        </select>
        {formState.errors.level && (
          <p className='p-error'>{formState.errors.level.message}</p>
        )}

        <button
          className='add-info'
          type='button'
          onClick={() => dispatch({ type: 'CHANGE_LEVEL' })}
        >
          {valueLevel ? '-' : '+'}
        </button>
      </div>

      <button className='general-button' type='submit'>
        Confirmar
      </button>
    </form>
  )
}

export default FormLogin
