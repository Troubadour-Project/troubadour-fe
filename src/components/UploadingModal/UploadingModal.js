import React from 'react'
import { Link } from 'react-router-dom'
import UploadingSpinner from '../UploadingSpinner/UploadingSpinner'
import './UploadingModal.scss'

const UploadingModal = props => {
  const messageForDisplay = !props.isResolved ? 'Uploading your submission. This might take some time.' : 'Your submission has succesfully uploaded! Thank you for your entry!'
  const checkUploadingState = () => {
    if (!props.isResolved) {
      return <UploadingSpinner/>
    } else {
      return (
        <>
          <Link to="/" className="uploading-modal-button">Home</Link>
          <Link to={`/submissions/${props.submissionId}`} className="uploading-modal-button">Your Submission</Link>
        </>
      )
    }
  }

  return (
    <section className="uploading-modal-background">
      <section className="uploading-modal-container">
        <section className="uploading-modal-text-container">
          <p className="uploading-modal-message">{messageForDisplay}</p>
        </section>
        <section className="uploading-buttons-container">
          {/* <Link to="/" className="uploading-modal-button">Home</Link>
          <Link to={`/submissions/${props.id}`} className="uploading-modal-button">Your Submission</Link> */}
          {checkUploadingState()}
        </section>
      </section>
    </section>
  )
}

export default UploadingModal