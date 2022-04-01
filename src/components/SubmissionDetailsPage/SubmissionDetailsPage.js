import { useQuery, gql } from "@apollo/client";
import "./SubmissionDetailsPage.scss";
import MusicianCard from "../MusicianProfile/MusicianProfile";

const GET_SUBMISSION = gql`
  query ($id: ID!){
    getSubmission(id: $id) {
      id
      name
      email
      genre
      songTitle
      winner
      profileUrl
      videoUrl
    }
  }
`

const SubmissionDetailsPage = () => {
  const { loading, error, data } = useQuery(GET_SUBMISSION, {
    variables: { id: 5 }
  });

  if (loading) return <p>loading...</p>
  if (error) return <p>{error.message}</p>

  return(
    <div className="details-container">
      <MusicianCard />
      <div className="submission-video">
        <video src={data.getSubmission.videoUrl} controls className="video-container"/>
      </div>
    </div>
  )
}

export default SubmissionDetailsPage