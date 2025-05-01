import { NavLink } from 'react-router-dom'
import './Header.css'
import React, { useEffect, useRef, useState } from 'react'
import CloseElements from '../../Custom/CloseElements/CloseElements'
import UseCloseElements from '../../Custom/CloseElements/CloseElements'

const Header = () => {
  const [open, setOpen] = useState(false)
  const headerElement = useRef(null)

  UseCloseElements(open, setOpen, headerElement)

  return (
    <header id={open ? 'header-open' : 'header'} ref={headerElement}>
      <button
        onClick={() => {
          setOpen(!open)
        }}
      >
        <img src='/public/assets/menu.svg' alt='menu' id='menu' />
      </button>
      <nav id='nav-header'>
        <ul id='ul-header'>
          <li
            className='li-header'
            onClick={() => {
              setOpen(!open)
            }}
          >
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Inicio
            </NavLink>
          </li>
          <li
            className='li-header'
            onClick={() => {
              setOpen(!open)
            }}
          >
            <NavLink
              to='/play'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Desafio
            </NavLink>
          </li>
          <li
            className='li-header'
            onClick={() => {
              setOpen(!open)
            }}
          >
            <NavLink
              to='/freePlay'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Modo libre
            </NavLink>
          </li>
        </ul>
        <button>
          <NavLink to='/logOut'>
            <img src='/public/assets/logout.svg' alt='logOut' id='logOut' />
          </NavLink>
        </button>
      </nav>
    </header>
  )
}

export default Header
