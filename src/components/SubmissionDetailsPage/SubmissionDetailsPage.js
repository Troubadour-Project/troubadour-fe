import "./SubmissionDetailsPage.scss";
import "../MusicianProfile/MusicianProfile";
import MusicianCard from "../MusicianProfile/MusicianProfile";


const SubmissionDetailsPage = () => {
  return(
    <div className="details-container">
      <MusicianCard />
      <div className="submission-video">
        video
      </div>
    </div>
  )
}

export default SubmissionDetailsPage