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

const SubmissionDetailsPage = ({ user }) => {
  const param = useParams();
  const { loading, error, data } = useQuery(GET_SUBMISSION, {
    variables: { id: param.id }
  });

  const winnerButton = user && 
    <button>Select As Winner</button>

  if (loading) return <p>loading...</p>
  if (error) return <p>{error.message}</p>
  if (data) {
    return (
      <div className="details-container">
        <MusicianProfile submission={data.getSubmission} />
        <div className="submission-video">
          <video src={data.getSubmission.videoUrl} controls className="video-container" />
        </div>
        { winnerButton }
      </div>
    );
  }
}

export default SubmissionDetailsPage