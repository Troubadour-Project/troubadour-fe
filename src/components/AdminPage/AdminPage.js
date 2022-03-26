import { useState, useEffect } from 'react';
import './AdminPage.scss';
import sampleUsers from '../../sampleUserData';

const AdminPage = () => {
  const [musicians, setMusicians] = useState([]);

  console.log(sampleUsers);

  const musicianCards = sampleUsers.map(musician => {
    return(
      <div className='card'>
        <img
          src={`${musician.profile}`}
          className='profile-img'
        />
        <p>{musician.name}</p>
        <p>{musician.song_title}</p>
      </div>
    );
  })

  return(
    <div className='admin-page'>
      <h2 className='admin-title'>Musician Submissions</h2>
      <div className='card-container'>
        { musicianCards }
      </div>
    </div>
  );
}

export default AdminPage;
