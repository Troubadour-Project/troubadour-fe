import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import { useQuery, gql } from '@apollo/client';

function App() {
  return (
    <div className="App">
      <NavBar/>
    </div>
  );
}

export default App;
