import React, {useState} from 'react'
import logo from '../../assets/Logo-Capstone.png'
import { Twirl as Hamburger } from 'hamburger-react'
import './NavBar.scss'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'

const NavBar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav>
      <img src={logo} alt="Crown of instruments"/>
      <h1>Troubadour</h1>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {isOpen && <HamburgerMenu />}
    </nav>
  )
}

export default NavBar