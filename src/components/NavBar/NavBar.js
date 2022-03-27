import React, { useState } from 'react'
import logo from '../../assets/Logo-Capstone.png'
import { Link } from 'react-router-dom'
import './NavBar.scss'
import classNames from 'classnames'

const NavBar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const active = classNames('mobile-menu', {
    open: mobileNavOpen,
  });

  return (
    <>
    <nav className="navigation-wrapper">
      <div className="navigation-header">
        <div className="navigation-names">
          <Link className="link" to="/">
            <img src={logo} alt="Crown of instruments"/> 
          </Link>
        </div>
      </div>
    </nav>
    </>
  )
}

export default NavBar
{/* <h1>Troubadour</h1> */}