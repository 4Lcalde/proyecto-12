import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

import React, { useEffect } from 'react'

const Chrono = React.memo(({ chrono, time, answered, dispatch }) => {
  useEffect(() => {
    let timer
    if (chrono && time > 0) {
      timer = setInterval(() => {
        dispatch({ type: 'TICK' })
      }, 1000)
    } else if (time === 0 && !answered) {
      dispatch({ type: 'END_TIME' })
      setTimeout(() => {
        dispatch({ type: 'START_TIME' })
      }, 1000)
    }

    return () => clearInterval(timer)
  }, [chrono, time, answered])

  return (
    <div>
      <CircularProgress color='teal.300' value={time} max={10} min={0}>
        <CircularProgressLabel>{time}</CircularProgressLabel>
      </CircularProgress>
    </div>
  )
})

export default Chrono
