import "./MusicianProfile.scss"

const MusicianCard = ({submissionDetails}) => {
  submissionDetails = {
    "id": 1,
    "name": "Ryan",
    "email": "ryan@gmail.com",
    "genre": "singer/songwriter",
    "song_title": "A Really Good Song",
    "selected": false,
    "type": 1,
    "profile": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    "video": "video.url"
  }

  return(
  <div className="submission-details">
    <div className="details-picture-container">
      <img className="details-picture" src={submissionDetails.profile} />
    </div>
    <div className="details-card-container">
      <p className="submission-detail">{submissionDetails.name}</p>
      <p className="submission-detail">{submissionDetails.genre}</p>
      <p className="submission-detail">{submissionDetails.song_title}</p>
    </div>
  </div>
  )
}

export default MusicianCard