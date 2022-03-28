import React from 'react'
import logo from '../../assets/Logo-Capstone.png'
import './NavBar.scss'

const NavBar = () => {
  return (
    <nav>
      <img src={logo} alt="Crown of instruments" className="nav-logo"/>
      <h1>Troubadour</h1>
      <p>| | |</p>
    </nav>
  )
}

export default NavBar