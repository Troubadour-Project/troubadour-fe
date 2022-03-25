import React, { useState } from 'react'
import './SubmissionForm.scss'

const SubmissionForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [genre, setGenre] = useState('')
  const [songTitle, setSongTitle] = useState('')
  const [songVideo, setSongVideo] = useState('')
  const [profileImage, setProfileImage] = useState('')

  const handleName = event => {
    setName(event.target.value)
  }
  const handleEmail = event => {
    setEmail(event.target.value)
  }
  const handleGenre = event => {
    setGenre(event.target.value)
  }
  const handleSongTitle = event => {
    setSongTitle(event.target.value)
  }
  const handleSongVideo = event => {
    setSongVideo(event.target.value)
  }
  const handleProfileImage = event => {
    setProfileImage(event.target.value)
  }

  return (
    <section className="form-container">
      <h2>Musician Information</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={event => handleName(event)}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          name="email"
          value={email}
          onChange={event => handleEmail(event)}
        />
        <label htmlFor="genre">Genre:</label>
        <input
          id="genre"
          type="text"
          name="genre"
          value={genre}
          onChange={event => handleGenre(event)}
        />
        <label htmlFor="song-title">Song Title:</label>
        <input
          id="song-title"
          type="text"
          name="song-title"
          value={songTitle}
          onChange={event => handleSongTitle(event)}
        />
      </form>
    </section>
  )
}

export default SubmissionForm