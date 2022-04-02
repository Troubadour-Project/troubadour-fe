import { useQuery, gql, useMutation } from "@apollo/client";
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

const UPDATE_WINNER = gql`
  mutation ($id: ID!, $winner: Boolean!) {
    updateWinner(input: {id: $id, winner: $winner}) {
      submission {
        id
        name
        email
        genre
        songTitle
        winner
      }
    }
  }
`

const SubmissionDetailsPage = ({ user }) => {
  const param = useParams();
  const id = param.id;

  const { loading, error, data } = useQuery(GET_SUBMISSION, {
    variables: { id: id }
  });

  const [ selectWinner, { loadingM, errorM, dataM }] = useMutation(UPDATE_WINNER, {
    variables: { id: id, winner: true }
  })

  const handleClick = (event) => {
    selectWinner()
      .then(response => console.log(response.data.updateWinner.submission))
  }

  const winnerButton = user && 
    <button onClick={(event) => handleClick(event)}>Select As Winner</button>

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