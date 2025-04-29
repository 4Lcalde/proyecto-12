export const changeDificulty = (newLevel, navigate) => {
  if (newLevel === '') {
    alert('Debes seleccionar un nivel válido')
    return
  }

  const userData = JSON.parse(localStorage.getItem('dataUserTrivial'))

  if (!userData) {
    z
    navigate('/login')
    return
  }
  userData.level = newLevel

  localStorage.setItem('dataUserTrivial', JSON.stringify(userData))

  navigate('/play')
}
