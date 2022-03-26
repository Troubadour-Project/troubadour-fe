import "./SubmissionDetailsPage.scss";


const SubmissionDetailsPage = ({submissionDetails}) => {
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
    <div className="details-container">
      <div className="submission-details">
        <img className="details-picture" src={submissionDetails.profile} />
        <p>{submissionDetails.name}</p>
        <p>{submissionDetails.genre}</p>
        <p>{submissionDetails.song_title}</p>
      </div>
      <div className="submission-video">
        video
      </div>
    </div>
  )
}

export default SubmissionDetailsPage