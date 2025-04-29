import './Login.css'
import { useEffect, useState } from 'react'
import FormLogin from '../../components/Login/FormLogin/FormLogin'

const Login = () => {
  const [start, setStart] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setStart(true)
    }, 2000)
  })

  return (
    <section className='login-section'>
      <h1 className='global-title' id='h1-global-title'>
        Bienvenido a <span>The Genius Show</span>
      </h1>

      {start && <FormLogin />}
    </section>
  )
}

export default Login
