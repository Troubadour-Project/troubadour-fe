import React from 'react'
import { Link } from 'react-router-dom'
import "./LandingPage.scss"

const LandingPage = () => {
  return(
    <div className="landing-page-container">
      <h2 className="welcome-message-header">Welcome to the Troubadour Music Contest!</h2>
      <p className="welcome-message">We will accept entries for the 2023 Troubadour Music Contest beginning April 1st, 2022. Contestants may submit an original song. We will post submission details later on.</p>
      <p className="submission-dates-header">Important submission dates:</p>
      <p className="submission-dates-april">April 22nd, 2023: All submissions must be postmarked on or before.</p>
      <p className="submission-dates-may">May 4th, 2023: We will notify all finalists and alternates by this date. Watch for the public posting of Troubadour finalists around this time.</p>
      <Link to="/form" className="hero-button">Become a Rockstar</Link>
    </div>
  )
}

export default LandingPage