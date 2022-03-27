import React from 'react'
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './HamburgerMenu.scss';

const HamburgerMenu = ({open}) => {

const displayMobileNavLinks = classNames('mobile-nav-wrapper', {
  open: open,
});

  return (
    <div className={displayMobileNavLinks}>
      <Link to="/">
        <button className="mobile-link" onClick={open}>Home</button>
      </Link>
      <Link to="/Admin">
        <button className="mobile-link" onClick={open}>Admin Page</button>
      </Link>
      <Link to="/Submission">
        <button className="mobile-link" onClick={open}>Submission form</button>
      </Link>
    </div>
  )
}

export default HamburgerMenu;