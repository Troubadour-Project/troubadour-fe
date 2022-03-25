import React from 'react'
import logo from '../../assets/logo.png'
import './NavBar.scss'

const NavBar = () => {
  return (
    <nav>
      <img src={logo} alt="Crown of instruments"/>
      <h1>Troubadour</h1>
    </nav>
  )
}

export default NavBar