import "./MusicianProfile.scss"

const MusicianProfile = ({ submission }) => {

  return(
  <div className="submission-details">
    <div className="details-picture-container">
      <img className="details-picture" src={submission.profileUrl} />
    </div>
    <div className="details-card-container">
      <p className="submission-detail">Musician Name: {submission.name}</p>
      <p className="submission-detail">Genre: {submission.genre}</p>
      <p className="submission-detail">Song Title: {submission.songTitle}</p>
    </div>
  </div>
  )
}

export default MusicianProfile;