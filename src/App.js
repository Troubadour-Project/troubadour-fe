import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import NavBar from './components/NavBar/NavBar'
import SubmissionForm from './components/SubmissionForm/SubmissionForm';
import AdminPage from './components/AdminPage/AdminPage';
import LandingPage from './components/LandingPage/LandingPage';
import './App.scss';
import SubmissionDetailsPage from './components/SubmissionDetailsPage/SubmissionDetailsPage';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <NavBar setUser={setUser}/>
      <main>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/submissions' element={<AdminPage user={user}/>} />
          <Route path='/form' element={<SubmissionForm />} />
          <Route path='/submissions/:id' element={<SubmissionDetailsPage user={user}/>}
          />
          {/* <Route path='/*' element={<Error />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
