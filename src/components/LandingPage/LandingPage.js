import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_WINNER } from '../../queries'
import UploadingSpinner from '../UploadingSpinner/UploadingSpinner';
import Error from '../Error/Error';
import "./LandingPage.scss"

const LandingPage = () => {
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    refetch()
      .then(response => setWinner(response.data.getWinner))
  }, [])

  const { loading, error, data, refetch } = useQuery(GET_WINNER)
  
  const displayWinner = winner &&
    <div className="winner-container">
      <div className="winner-title-container">
        <p className="winner-title">Our Troubadour 2022 winner is:</p>
      </div>
      <img src={data.getWinner.profileUrl} className="winner-image" alt="Profile image of the contest winner"></img>
      <div className="winner-name-container">
        <p className="winner-name">{data.getWinner.name}</p>
      </div>
    </div>
  
  if (loading) {
    return (
      <div className="loading-container">
        <UploadingSpinner />
      </div>
    );
  }
  if (error) return <Error error={error}/>
  if (data) return(
    <div className="landing-page-container">
      <h2 className="welcome-message-header">Welcome to the Troubadour Music Contest!</h2>
      { displayWinner }
        <div className="scroll">
          <p className="greeting-message">
          We will accept entries for the 2023 Troubadour Music Contest beginning April 1st, 2022. Contestants may submit an original song. We will post submission details later on.
          <br />
          Important submission dates: 
          <br />
          April 22nd, 2023
          <br />
          - All submissions must be postmarked on or before.
          <br />
         May 4th, 2023
          <br />
        - We will notify all finalists and alternates by this date. Watch for the public posting of Troubadour finalists around this time.</p>
        <Link to="/form" className="hero-button">Sign Up Form</Link>
      </div>
    </div>
  )
}


{/* <p className="welcome-message">We will accept entries for the 2023 Troubadour Music Contest beginning April 1st, 2022. Contestants may submit an original song. We will post submission details later on.</p>
        <p className="submission-dates-header">Important submission dates:</p>
        <p className="submission-dates-april">April 22nd, 2023: All submissions must be postmarked on or before.</p>
        <p className="submission-dates-may">May 4th, 2023: We will notify all finalists and alternates by this date. Watch for the public posting of Troubadour finalists around this time.</p> */}
export default LandingPage