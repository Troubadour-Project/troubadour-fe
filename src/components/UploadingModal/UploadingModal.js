import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UploadingSpinner from '../UploadingSpinner/UploadingSpinner';
import './UploadingModal.scss';

const UploadingModal = ({ isResolved, submissionId, error, handleError }) => {
  const checkMessage = () => {
    if (!isResolved && !error) {
      return 'Uploading your submission. This might take some time.';
    } else if (error) {
      return 'Something went wrong, please try again.';
    } else if (isResolved) {
      return 'Your submission has succesfully uploaded! Thank you for your entry!';
    } else {
      return null
    }
  }

  const checkUploadingState = () => {
    if (!isResolved && !error) {
      return <UploadingSpinner/>;
    } else if (error) {
      const message = 'Something went wrong, please try again.'
      return (
        <Link to='/form'>
          <button onClick={() => handleError()}>Try Again</button>
        </Link>
      );
    } else {
      return (
        <>
          <Link to="/" className="uploading-modal-button">Home</Link>
          <Link to={`/submissions/${submissionId}`} className="uploading-modal-button">Your Submission</Link>
        </>
      );
    }
  }

  return (
    <section className="uploading-modal-background">
      <section className="uploading-modal-container">
        <section className="uploading-modal-text-container">
          <p className="uploading-modal-message">{ checkMessage() }</p>
        </section>
        <section className="uploading-buttons-container">
          { checkUploadingState() }
        </section>
      </section>
    </section>
  );
}

export default UploadingModal;