import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { GET_SUBMISSION } from '../../queries';
import MusicianProfile from "../MusicianProfile/MusicianProfile";
import Modal from '../Modal/Modal';
import Error from '../Error/Error';
import './SubmissionDetailsPage.scss';

const SubmissionDetailsPage = ({ user }) => {
  const [showModal, setShowModal] = useState(false);
  
  const param = useParams();
  const id = param.id;

  const { loading, error, data } = useQuery(GET_SUBMISSION, {
    variables: { id: id }
  });

  const handleClick = () => {
    setShowModal(true);
  } 

  const winnerButton = user && 
    <button className="winner-btn" onClick={(event) => handleClick(event)}>Select As Winner</button>

  const modal = showModal &&
    <Modal name={data.getSubmission.name} setShowModal={setShowModal} id={id}/>
  
  if (loading) return <p>loading...</p>
  if (error) return <Error error={error} />
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