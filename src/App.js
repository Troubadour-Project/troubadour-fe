import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import SubmissionForm from './components/SubmissionForm/SubmissionForm';
import AdminPage from './components/AdminPage/AdminPage';
import LandingPage from './components/LandingPage/LandingPage';
import Error from './components/Error/Error';
import './App.scss';
import SubmissionDetailsPage from './components/SubmissionDetailsPage/SubmissionDetailsPage';

const App = ({ client }) => {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <NavBar setUser={setUser} user={user}/>
      <main>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/submissions' element={<AdminPage user={user} client={client} />} />
          <Route exact path='/form' element={<SubmissionForm />} />
          <Route path='/submissions/:id' element={<SubmissionDetailsPage user={user}/>} />
          <Route path='/*' element={<Error error='incorrect url'/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
