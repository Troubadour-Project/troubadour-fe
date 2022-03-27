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
      <Link to="/submission">
        <button className="mobile-link" onClick={open}>Submission form</button>
      </Link>
      <Link to="/admin">
        <button className="mobile-link" onClick={open}>admin page</button>
      </Link>
    </div>
  )
}

export default HamburgerMenu;