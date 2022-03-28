import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import NavBar from './components/NavBar/NavBar'
import SubmissionForm from './components/SubmissionForm/SubmissionForm';
import AdminPage from './components/AdminPage/AdminPage';
import LandingPage from './components/LandingPage/LandingPage';
import './App.scss';
import SubmissionDetailsPage from './components/SubmissionDetailsPage/SubmissionDetailsPage';

// const GET_ALL_USERS_DATA = gql`
//   query GetUsers {
//     fetchUsers {
//       id
//       name
//       email
//       genre
//       songTitle
//       video
//       profile
//     }
//   }
// `

function App() {
  // const { loading, error, data } = useQuery(GET_ALL_USERS_DATA)
  // console.log(data)
  return (
    <div className="App">
      <NavBar/>
      <main>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/submission' element={<SubmissionForm />} />
          <Route path='/submissiondetails' element={<SubmissionDetailsPage />}
          />
          {/* <Route path='/*' element={<Error />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
