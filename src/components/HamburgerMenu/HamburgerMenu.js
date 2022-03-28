import React from 'react'
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './HamburgerMenu.scss';

const HamburgerMenu = ({open, setMobileNavOpen}) => {

const displayMobileNavLinks = classNames('mobile-nav-wrapper', {
  open: open,
});

  return (
    <div className={displayMobileNavLinks}>
      <Link to="/" className="mobile-link" onClick={() => setMobileNavOpen(!open)}>Home</Link>
      <Link to="/submission" className="mobile-link" onClick={() => setMobileNavOpen(!open)}>Submission Form</Link>
      <Link to="/allsubmissions" className="mobile-link" onClick={() => setMobileNavOpen(!open)}>All Submissions</Link>
    </div>
  )
}

export default HamburgerMenu;