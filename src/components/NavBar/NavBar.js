import React, { useState } from 'react'
import classNames from 'classnames'
import logo from '../../assets/Logo-Capstone.png'
import { Link } from 'react-router-dom'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import './NavBar.scss'



const NavBar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const active = classNames('mobile-menu', {
    open: mobileNavOpen,
  });

  return (
    <>
    <nav className="navigation-wrapper">
      <h1>Troubadour</h1>
      <div className="navigation-header">
        <div className="navigation-names">
          <Link className="link" to="/">
            <img className="logo" src={logo} alt="Crown of instruments"/> 
          </Link>
        </div>
        <div className="navigation-links">
          <button
            aria-label="Toggle Mobile Menu Button"
            className={active}
            onClick={() => {
              setMobileNavOpen((mobileNavOpen) => !mobileNavOpen)
            }}
            >
            <div className="bar-one" />
            <div className="bar-two" />
            <div className="bar-three" />
          </button>
        </div>
      </div>
      <HamburgerMenu open={mobileNavOpen} setMobileNavOpen={setMobileNavOpen}/>
    </nav>
    </>
  )
}

export default NavBar