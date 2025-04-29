import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import './Chrono.css'
import React, { useEffect, useState } from 'react'

const Chrono = ({ state, dispatch }) => {
  const [time, setTime] = useState(5)
  const [chrono, setChrono] = useState(true)

  useEffect(() => {
    let timer
    if (chrono && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1)
      }, 1000)
    }
    if (time === 0 && chrono) {
      setChrono(false)

      setTimeout(() => {
        dispatch({ type: 'START_TIME' })
      }, 1000)
    }

    return () => clearInterval(timer)
  }, [chrono, time])

  return (
    <div>
      <CircularProgress color='teal.300' value={time} max={10} min={0}>
        <CircularProgressLabel>{time}</CircularProgressLabel>
      </CircularProgress>
    </div>
  )
}

export default Chrono
