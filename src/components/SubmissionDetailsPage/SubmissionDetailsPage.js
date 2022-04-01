import { useQuery, gql } from "@apollo/client";
import "./SubmissionDetailsPage.scss";
import MusicianProfile from "../MusicianProfile/MusicianProfile";
import { useParams } from 'react-router-dom';

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
  const param = useParams();
  const { loading, error, data } = useQuery(GET_SUBMISSION, {
    variables: { id: param.id }
  });

  if (loading) return <p>loading...</p>
  if (error) return <p>{error.message}</p>
  if (data) {
    return (
      <div className="details-container">
        <MusicianProfile submission={data.getSubmission} />
        <div className="submission-video">
          <video src={data.getSubmission.videoUrl} controls className="video-container" />
        </div>
      </div>
    );
  }
}

export default SubmissionDetailsPage