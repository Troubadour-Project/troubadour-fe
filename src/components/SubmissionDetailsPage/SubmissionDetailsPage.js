import { useQuery } from "@apollo/client";
import "./SubmissionDetailsPage.scss";
import "../MusicianProfile/MusicianProfile";
import MusicianCard from "../MusicianProfile/MusicianProfile";
import { GET_SUBMISSION } from '../../queries';


const SubmissionDetailsPage = () => {
  const { loading, error, data } = useQuery(GET_SUBMISSION);

  if (loading) return <p>loading...</p>
  if (error) return <p>{error.message}</p>
  console.log(data)
  return(
    <div className="details-container">
      <video src={data.getSubmission.videoUrl} controls/>
      <MusicianCard />
      <div className="submission-video">
        video
      </div>
    </div>
  )
}

export default SubmissionDetailsPage