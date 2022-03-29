import React, { useState } from 'react'
import profilePicLogo from '../../assets/profile-pic-logo.png'
import './SubmissionForm.scss'

const SubmissionForm = () => {
  const videoInput = React.createRef()
  const imageInput = React.createRef()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [genre, setGenre] = useState('')
  const [songTitle, setSongTitle] = useState('')
  const [video, setVideo] = useState('')
  const [profileImage, setProfileImage] = useState('')
  const [isLargeFile, setIsLargeFile] = useState(false)

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
    } else {
      setIsLargeFile(false)
      setVideo(event.target.files[0])
    }
  }
  const handleProfileImage = event => {
    if (!event.target.files[0]) {
      setProfileImage('')
      return 
    } else if (event.target.files[0].size >= 500000000) {
      setIsLargeFile(true)
    } else {
      setIsLargeFile(false)
      setProfileImage(event.target.files[0])
    }
  }

  const clearInputs = () =>  {
    setName('');
    setEmail('');
    setGenre('');
    setSongTitle('');
    setVideo('');
    setProfileImage('');
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(event)
    const formData = new FormData()

    formData.append('name', name)
    formData.append('email', email)
    formData.append('genre', genre)
    formData.append('song_title', songTitle)
    formData.append('profile', video)
    formData.append('video', profileImage)

    for (var value of formData.entries()) {
      console.log(`${value[0]} ${value[1]}`)
    }

    return fetch('https://troubadour-be.herokuapp.com/users', {
      method: 'POST',
      accept: 'application/json',
      // body: {
      //   name: 'some guy',
      //   email: 'yaddah@blah.something',
      //   genre: 'yes',
      //   song_title: 'good stuff',
      //   // profile: profilePicLogo,
      //   profile: profileImage,
      //   // video: movieUpload
      //   video: video
      // }
      body: formData
    })
    .then(response => console.log(response))
    // clearInputs();
  }

  // const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  const profilePicturePreview = profileImage ?
    <img src={URL.createObjectURL(profileImage)} alt="Profile picture logo" className="profile-picture-preview"/> :
    <img src={profilePicLogo} alt="Profile picture logo" className="profile-picture-preview"/>
  
    return (
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
        {/* <button className="submit-button" onSubmit={e => {handleSubmit(e)}}>Submit</button> */}
        {/* {isLargeFile ? <p className="file-size-message">Please select a smaller file size</p> : <button className="submit-button" onClick={event => handleSubmit(event)}>Submit</button>} */}
        {isLargeFile ? <p className="file-size-message">Please select a smaller file size</p> : <button className="submit-button">Submit</button>}
      </form>
    </section>
  )
}

export default SubmissionForm