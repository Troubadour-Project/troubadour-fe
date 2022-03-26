import React from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar'
import { useQuery, gql } from '@apollo/client';
import AdminPage from './components/AdminPage/AdminPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AdminPage />
      <main>
        {/* routes will go here */}
      </main>
    </div>
  );
}

export default App;
