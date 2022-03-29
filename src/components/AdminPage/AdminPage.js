import { useState, useEffect } from 'react';
import './AdminPage.scss';
import sampleUsers from '../../sampleUserData';
import MusicianCard from '../MusicianCard/MusicianCard';
import { useQuery } from '@apollo/client';
import { GET_ALL_SUBMISSIONS } from '../../queries';

const AdminPage = () => {
  const [musicians, setMusicians] = useState([]);

  const { loading, error, data } = useQuery(GET_ALL_SUBMISSIONS);

  const renderCards = (data) => {
    console.log(data);
    return data.fetchUsers.map(user => {
      return <MusicianCard key={user.id} user={user} />
    });
  } 

  if (loading) return 'Loading...';
  if (error) return <p>error: {error.message}</p>;
  if (data) return(
    <div className='admin-page'>
      <div className='admin-title-container'>
        <h2 className='admin-title'>Submissions</h2>
      </div>
      <div className='card-container'>
        { renderCards(data) }
      </div>
    </div>
  );
}

export default AdminPage;
