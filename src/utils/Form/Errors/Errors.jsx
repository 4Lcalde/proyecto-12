import React from 'react'

const Errors = ({ formState, elemento }) => {
  console.log(formState)
  const errorMessage = formState.errors[elemento]?.message
  console.log(errorMessage)
  return errorMessage ? <p className='p-error'>{errorMessage}</p> : null
}

export default Errors
