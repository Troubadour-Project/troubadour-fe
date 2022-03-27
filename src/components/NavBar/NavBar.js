import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo-Capstone.png'
import './NavBar.scss'

const NavBar = () => {
  return (
    <nav>
      <Link to="/"><img src={logo} alt="Crown of instruments" className="nav-logo"/></Link>
      <h1>Troubadour</h1>
      <p>| | |</p>
    </nav>
  )
}

export default NavBar