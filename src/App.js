import React from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar'
import SubmissionForm from './components/SubmissionForm/SubmissionForm';
import { useQuery, gql } from '@apollo/client';
import AdminPage from './components/AdminPage/AdminPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
      </main>
    </div>
  );
}

export default App;
