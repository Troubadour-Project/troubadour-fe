import "./SubmissionDetailsPage.scss";
import "../MusicianProfile/MusicianProfile";
import MusicianProfile from "../MusicianProfile/MusicianProfile";
import { useQuery } from '@apollo/client';
// import { GET_SINGLE_SUBMISSION } from '../../queries';
import { useParams } from 'react-router-dom';

const SubmissionDetailsPage = ({ user }) => {
  const { id } = useParams();
  console.log(id)

  // const { loading, error, data } = useQuery(GET_SINGLE_SUBMISSION, {
  //   variables: { id },
  // });

  // const voteButton = user && <button>Winner</button>

  // if (data) return(
  //   <div className="details-container">
  //     <MusicianProfile data={data}/>
  //     <div className="submission-video">
  //       video
  //     </div>
  //     { voteButton }
  //   </div>
  // );

  return (
    <p>Submission details will go here</p>
  )
}

export default SubmissionDetailsPage