import React, { useEffect } from 'react'

const UseCloseElements = (open, setOpen, element) => {
  useEffect(() => {
    const closeElement = (e) => {
      if (open && element.current && !element.current.contains(e.target)) {
        setOpen(false)
      }
    }

    //La primera linea escuccha el evento y el return lo limpia para evitar errores
    document.addEventListener('mousedown', closeElement)

    return () => {
      document.removeEventListener('mousedown', closeElement)
    }
  }, [open, setOpen, element])
}

export default UseCloseElements
