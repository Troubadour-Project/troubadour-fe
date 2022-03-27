import React from 'react'
import { Link } from 'react-router-dom';

const HamburgerMenu = ({toggle}) => {

  return (
    <div>
    <Link to="/">
      <button onClick={toggle}>Home</button>
    </Link>
    <Link to="/Admin">
      <button onClick={toggle}>Admin Page</button>
    </Link>
    <Link to="/Submission">
      <button onClick={toggle}>Submission form</button>
    </Link>
    </div>
  )
}

export default HamburgerMenu;

// <Hamburger toggled={isOpen} toggle={setOpen} />
// https://bluegrass.com/ - Inspo site

// What will this component need ?
/**
  User View:
    1. <Home/> - LandingPage ?
    2. <SubmissionPage/>
    3. <admin page>
 */

    // Factors to think about displaying this hambuger menu 
    /**
     - How do we want to display this hamburger menu ? 
      - example 1:
          Display all the button views user/admin will go.
            Once in Mobile (responsive) Its a hambuger menu. 
            When on click it will display all the views the user/admin can go to.
            Youtube tutorial: https://www.youtube.com/watch?v=nLTMn19vupw

      - example 2: 
           Just display a Hamburger menu at all times 
              - Npm package: https://negomi.github.io/react-burger-menu/ - Sidebar Animation

              - Youtube tutorial: https://www.youtube.com/watch?v=P3W7MZ3JkyA - default
              

      -- Do we want to have a animation on the hamburger ?
            ( Not necessary just for styling purposes )
            - IF so:
              https://hamburger-react.netlify.app/

              Should I install Router ? And build out the 
      
     */