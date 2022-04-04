import React from 'react'
import { Link } from 'react-router-dom'
import './UploadingModal.scss'

const UploadingModal = props => {
  return (
    <section className="uploading-modal-background">
      <section className="uploading-modal-container">
        <section className="uploading-text-container">
          <p className="">Uploading your Submission. This might take some time.</p>
        </section>
        <section className="uploading-button-container">
          <Link to="/">Home</Link>
          <Link to={`/submissions/${props.id}`}>Your Submission</Link>
        </section>
      </section>
    </section>
  )
}

export default UploadingModal