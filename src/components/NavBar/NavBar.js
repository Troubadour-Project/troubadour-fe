import React, { useState } from 'react'
import classNames from 'classnames'
import { useQuery } from '@apollo/client'
import logo from '../../assets/Logo-Capstone.png'
import { Link } from 'react-router-dom'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import { GET_ADMIN } from '../../queries';
import './NavBar.scss'

const NavBar = ({ setUser, user }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const { loading, error, data, refetch } = useQuery(GET_ADMIN);
  
  const handleLogin = () => {
    refetch();
    if (!user && data) {
      setUser(data.getAdmin);
    } else if (user) {
      setUser(null);
    }
  }
  
  const active = classNames('mobile-menu', {
    open: mobileNavOpen,
  });

  const buttonText = !user ? "Login" : "Logout"

  return (
    <>
    <nav className="navigation-wrapper">
      <div className="navigation-header">
        <div className="navigation-names">
          <Link className="link" to="/">
            <img className="logo" src={logo} alt="Crown of instruments"/> 
          </Link>
        </div>
        <h1>Troubadour</h1>
        <div className="button-menu-container">
          <button className="login-button" onClick={() => handleLogin()}>{ buttonText }</button>
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
      </div>
      <HamburgerMenu open={mobileNavOpen} setMobileNavOpen={setMobileNavOpen}/>
    </nav>
    </>
  )
}

export default NavBar