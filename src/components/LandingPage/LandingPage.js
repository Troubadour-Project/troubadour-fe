import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./LandingPage.scss"
import { useQuery } from '@apollo/client'
import { GET_WINNER } from '../../queries'

const LandingPage = () => {
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    refetch()
      .then(response => {
        console.log(response.data.getWinner)
        setWinner(response.data.getWinner)
      })
  }, [])

  const { loading, error, data, refetch } = useQuery(GET_WINNER)
  
  const displayWinner = winner &&
    <p className="winner">{data.getWinner.name} is the winner!!!!!!!</p>

  return(
    <div className="landing-page-container">
      { displayWinner }
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