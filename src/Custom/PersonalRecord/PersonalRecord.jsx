import React, { useEffect, useState } from 'react'

const usePersonalRecord = () => {
  const [record, setRecord] = useState(0)

  const updateRecord = (newScore) => {
    if (newScore > record) {
      setRecord(newScore)
      localStorage.setItem('dataScoreTrivial', newScore)
    }
  }
  return { record, updateRecord }
}

export default usePersonalRecord
