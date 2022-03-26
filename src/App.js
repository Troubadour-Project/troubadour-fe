import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import NavBar from './components/NavBar/NavBar'
import SubmissionForm from './components/SubmissionForm/SubmissionForm';
import AdminPage from './components/AdminPage/AdminPage';
import LandingPage from './components/LandingPage/LandingPage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/Admin' element={<AdminPage />} />
          <Route path='/Submission' element={<SubmissionForm />} />
          {/* <Route path='/*' element={<Error />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
