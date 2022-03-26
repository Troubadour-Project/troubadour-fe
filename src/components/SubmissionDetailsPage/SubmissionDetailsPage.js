import "./SubmissionDetailsPage.scss";
import "../MusicianCard/MusicianCard";
import MusicianCard from "../MusicianCard/MusicianCard";


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