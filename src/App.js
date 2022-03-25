import React, { useState } from 'react'
import './App.css';

// Sorry this is so ugly, but it does the things

const Form = props => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)
  const [video, setVideo] = useState(null)

  const handleTitle = event => {
    setTitle(event.target.value)
  }

  const handleDescription = event => {
    setDescription(event.target.value)
  }

  const handleImage = event => {
    setImage(URL.createObjectURL(event.target.files[0]))
  }

  const handleVideo = event => {
    setVideo(URL.createObjectURL(event.target.files[0]))
  }

  const handleSubmit = event => {
    event.preventDefault()
    const newIdea = {
      id: Date.now(),
      title,
      description,
      image
    }
    props.addIdea(newIdea)
    setTitle('')
    setDescription('')
  }

  const renderImage = image ? <img src={image} alt="hope this works"/> : null
  const renderVideo = video ? <video width="750" height="500" controls >
                                <source src={video} type="video/mp4"/>
                              </video> : null

  return (
    <>
      {renderImage}
      {renderVideo}
      <form>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={event => handleTitle(event)}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={event => handleDescription(event)}
        />
        <br/>
        <label htmlFor="image-input">Image</label>
        <input
          id="image-input"
          type="file"
          name="file-image"
          accept="image/jpeg, image/png"
          onChange={event => handleImage(event)}
        />
        <label htmlFor="video-upload">video</label>
        <input
          id="video-upload"
          type="file"
          name="video-upload"
          accept="video/*"
          onChange={event => handleVideo(event)}
        />
        <button onClick={event => handleSubmit(event)}>Submit</button>
      </form>
    </>
  )
}

const Ideas = props => {
  const allIdeas = props.ideas.map(idea => {
    return (
      <section className="idea-card" key={idea.id}>
        <img src={idea.image} alt="some stuff"/>
        <h2>{idea.title}</h2>
        <p>{idea.description}</p>
      </section>
    )
  })

  return (
    <section className="ideas-container">
      {allIdeas}
    </section>
  )
}

const App = () => {
  const [ideas, setIdeas] = useState([
    // These two wont have images in them, but other submitted cards will
    {id: 1, title: 'Build the stuff', description: 'and things'},
    {id: 2, title: 'Build more stuff', description: 'and more things'},
  ])

  const addIdea = idea => {
    setIdeas([...ideas, idea])
  }

  return (
    <div className="App">
      <h1>Upload File Stuff</h1>
      <Form addIdea={addIdea}/>
      <Ideas ideas={ideas}/>
    </div>
  );
}

export default App;
