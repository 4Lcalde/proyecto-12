import React, { createContext, useEffect, useState } from 'react'
export const ModeContext = createContext()

const ModeProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(
    localStorage.getItem('lightMode') === 'true' ? true : false
  )

  useEffect(() => {
    localStorage.setItem('lightMode', lightMode)
  }, [lightMode])
  return (
    <ModeContext.Provider value={{ lightMode, setLightMode }}>
      {children}
    </ModeContext.Provider>
  )
}

export default ModeProvider
