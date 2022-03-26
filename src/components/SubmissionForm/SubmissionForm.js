import React, { useState } from 'react'
import profilePicLogo from '../../assets/profile-pic-logo.png'
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
    console.log(URL.createObjectURL(event.target.files[0]))
    setProfileImage(URL.createObjectURL(event.target.files[0]))
  }
  const profilePicturePreview = profileImage ? <img src={profileImage} alt="Profile picture logo" className="profile-picture-preview"/> 
                                              : <img src={profilePicLogo} alt="Profile picture logo" className="profile-picture-preview"/>
  return (
    <section className="form-container">
      <form>
        <h2>Musician Information</h2>
        <br />
        {profilePicturePreview}
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={event => handleName(event)}
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={event => handleEmail(event)}
          required
        />
        <br />
        <label htmlFor="genre">Genre:</label>
        <input
          id="genre"
          type="text"
          name="genre"
          value={genre}
          onChange={event => handleGenre(event)}
          required
        />
        <br />
        <label htmlFor="song-title">Song Title:</label>
        <input
          id="song-title"
          type="text"
          name="song-title"
          value={songTitle}
          onChange={event => handleSongTitle(event)}
          required
        />
        <br />
        <label htmlFor="video">Video:</label>
        <input
          id="video"
          type="file"
          name="video"
          // value={video}
          accept="video/*"
          onChange={event => handleVideo(event)}
          required
        />
        <br />
        <label htmlFor="profile-image">Profile Image:</label>
        <input
          id="profile-image"
          type="file"
          name="profile-image"
          // value={profileImage}
          accept="image/*"
          onChange={event => handleProfileImage(event)}
          required
        />
        <br />
        <button className="submit-button">Submit</button>
      </form>
    </section>
  )
}

export default SubmissionForm