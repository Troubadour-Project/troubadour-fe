import React, { useState } from 'react'
import './SubmissionForm.scss'

const SubmissionForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [genre, setGenre] = useState('')
  const [songTitle, setSongTitle] = useState('')
  const [video, setVideo] = useState('')
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
  const handleVideo = event => {
    setVideo(event.target.value)
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
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={event => handleEmail(event)}
          required
        />
        <label htmlFor="genre">Genre:</label>
        <input
          id="genre"
          type="text"
          name="genre"
          value={genre}
          onChange={event => handleGenre(event)}
          required
        />
        <label htmlFor="song-title">Song Title:</label>
        <input
          id="song-title"
          type="text"
          name="song-title"
          value={songTitle}
          onChange={event => handleSongTitle(event)}
          required
        />
        <label htmlFor="video">Video:</label>
        <input
          id="video"
          type="file"
          name="video"
          value={video}
          accept="video/*"
          onChange={event => handleVideo(event)}
          required
        />
        <label htmlFor="profile-image">Profile Image:</label>
        <input
          id="profile-image"
          type="file"
          name="profile-image"
          value={profileImage}
          accept="image/*"
          onChange={event => handleProfileImage(event)}
          required
        />
        <button>Submit</button>
      </form>
    </section>
  )
}

export default SubmissionForm