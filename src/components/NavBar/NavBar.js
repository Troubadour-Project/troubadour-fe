import React from 'react'
import logo from '../../assets/Logo-Capstone.png'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import './NavBar.scss'

const NavBar = () => {
  return (
    <nav>
      <img src={logo} alt="Crown of instruments"/>
      <h1>Troubadour</h1>
      <HamburgerMenu/>
      {/* <p>| | |</p> */}
    </nav>
  )
}

export default NavBar