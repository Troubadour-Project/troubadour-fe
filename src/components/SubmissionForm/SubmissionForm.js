import React, { useState } from 'react'
import profilePicLogo from '../../assets/profile-pic-logo.png'
import './SubmissionForm.scss'

const SubmissionForm = () => {
  let videoInput = React.createRef()
  let imageInput = React.createRef()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [genre, setGenre] = useState('')
  const [songTitle, setSongTitle] = useState('')
  const [video, setVideo] = useState('')
  const [profileImage, setProfileImage] = useState('')
  const [isLargeFile, setIsLargeFile] = useState(false)
  const [isNotVideoFile, setIsNotVideoFile] = useState(false)
  const [isNotImageFile, setIsNotImageFile] = useState(false)
  const [videoURL, setVideoURL] = useState('')
  const [isUploading, setIsUploading] = useState(false)

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
    if (!event.target.files[0]) {
      setVideo('')
      return 
    } else if (event.target.files[0].size >= 500000000) {
      setIsLargeFile(true)
    } else if (!event.target.files[0].type.includes('video')) {
      setIsNotVideoFile(true)
    } else {
      setIsLargeFile(false)
      setIsNotVideoFile(false)
      setVideo(event.target.files[0])
    }
  }
  const handleProfileImage = event => {
    if (!event.target.files[0]) {
      setProfileImage('')
      return 
    } else if (event.target.files[0].size >= 500000000) {
      setIsLargeFile(true)
    } else if (!event.target.files[0].type.includes('image')) {
      setIsNotImageFile(true)
    } else {
      setIsLargeFile(false)
      setIsNotImageFile(false)
      setProfileImage(event.target.files[0])
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    setIsUploading(true)
    const formData = new FormData()

    formData.append("submission[name]", name)
    formData.append("submission[email]", email)
    formData.append("submission[genre]", genre)
    formData.append("submission[song_title]", songTitle)
    formData.append("submission[profile]", profileImage)
    formData.append("submission[video]", video)
    formData.append("submission[winner]", null)

    for (var value of formData.entries()) {
      console.log(`${value[0]} ${value[1]}`)
    }

    fetch('https://troubadour-be.herokuapp.com/api/v1/submissions', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setIsUploading(false)
    })
    clearInputs();
    document.querySelector('form').reset()
  }

  const clearInputs = () =>  {
    setName('');
    setEmail('');
    setGenre('');
    setSongTitle('');
    setVideo('');
    setProfileImage('');
  }

  const checkFile = () => {
    if (isLargeFile) {
      return <p className="file-size-message">Please select a smaller file size</p>
    } else if (isNotVideoFile) {
      return <p className="wrong-video-message">Please select a video file</p>
    } else if (isNotImageFile) {
      return <p className="wrong-image-message">Please select an image file</p>
    } else {
      return <button className="submit-button">Submit</button>
    }
  }

  const profilePicturePreview = profileImage ?
    <img src={URL.createObjectURL(profileImage)} alt="Profile picture logo" className="profile-picture-preview"/> :
    <img src={profilePicLogo} alt="Profile picture logo" className="profile-picture-preview"/>
  
    return (
    <>
    {isUploading ? <p>uploading!!!!</p> : null}
    <section className="form-container">
      <form onSubmit={event => handleSubmit(event)}>
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
          ref={videoInput}
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
          ref={imageInput}
          accept="image/*"
          onChange={event => handleProfileImage(event)}
          required
        />
        <br />
        {checkFile()}
      </form>
    </section>
    </>
  )
}

export default SubmissionForm