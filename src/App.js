import React from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar'
import SubmissionForm from './components/SubmissionForm/SubmissionForm';
import { useQuery, gql } from '@apollo/client';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SubmissionForm/>
    </div>
  );
}

export default App;
