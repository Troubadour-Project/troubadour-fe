import { useQuery, gql } from "@apollo/client";
import "./SubmissionDetailsPage.scss";
import MusicianProfile from "../MusicianProfile/MusicianProfile";
import { useParams } from 'react-router-dom';
import Modal from '../Modal/Modal';
import { useState } from 'react';

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

// const UPDATE_WINNER = gql`
//   mutation ($id: ID!, $winner: Boolean!) {
//     updateWinner(input: {id: $id, winner: $winner}) {
//       submission {
//         id
//         name
//         email
//         genre
//         songTitle
//         winner
//       }
//     }
//   }
// `

const SubmissionDetailsPage = ({ user }) => {
  const [showModal, setShowModal] = useState(false);
  
  const param = useParams();
  const id = param.id;

  const { loading, error, data } = useQuery(GET_SUBMISSION, {
    variables: { id: id }
  });

  // const [ selectWinner, { loadingM, errorM, dataM }] = useMutation(UPDATE_WINNER, {
  //   variables: { id: id, winner: true }
  // })

  // const handleClick = (event) => {
  //   selectWinner()
  //     .then(response => console.log(response.data.updateWinner.submission))
  // }

  const handleClick = () => {
    setShowModal(true);
  } 

  const winnerButton = user && 
    <button className="winner-btn" onClick={(event) => handleClick(event)}>Select As Winner</button>

  const modal = showModal &&
    <Modal name={data.getSubmission.name} setShowModal={setShowModal} id={id}/>
  
  if (loading) return <p>loading...</p>
  if (error) return <p>{error.message}</p>
  if (data) {
    return (
      <div className="details-container">
        { modal }
        <MusicianProfile submission={data.getSubmission} />
        <div className="submission-video">
          <video src={data.getSubmission.videoUrl} controls className="video-container" />
          <div className="winner-btn-container">
            { winnerButton }
          </div>
        </div>
      </div>
    );
  }
}

export default SubmissionDetailsPage