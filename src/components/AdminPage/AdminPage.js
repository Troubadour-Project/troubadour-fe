import { useState, useEffect } from 'react';
import './AdminPage.scss';
import sampleUsers from '../../sampleUserData';
import MusicianCard from '../MusicianProfile/MusicianProfile';

const AdminPage = () => {
  const [musicians, setMusicians] = useState([]);

  const musicianCards = sampleUsers.map(user => {
    return <MusicianCard user={user} />
  })

  return(
    <div className='admin-page'>
      <div className='admin-title-container'>
        <h2 className='admin-title'>Musician Submissions</h2>
      </div>
      <div className='card-container'>
        { musicianCards }
      </div>
    </div>
  );
}

export default AdminPage;
