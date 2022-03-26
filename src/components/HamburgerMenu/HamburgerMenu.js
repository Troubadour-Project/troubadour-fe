import React from 'react'

const HamburgerMenu = () => {

  return (
    <div>
      
    </div>
  )
}

export default HamburgerMenu;

// https://bluegrass.com/ - Inspo site

// What will this component need ?
/**
  User View:
    1. <Home/> - LandingPage ?
    2. <SubmissionPage/>

  Admin View:
    1. Submission view 
    2. Home/> - LandingPage ?

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
      
     */