import { useEffect, useState } from 'react';
import './AdminPage.scss';
import MusicianCard from '../MusicianCard/MusicianCard';
import { useQuery } from '@apollo/client';
import { GET_SUBMISSIONS } from '../../queries';

const AdminPage = ({ user }) => {
  const { loading, error, data, refetch } = useQuery(GET_SUBMISSIONS);

  useEffect(() => {
    refetch()
  }, [])

  if (loading) return 'Loading...';
  if (error) return <p>error: {error.message}</p>;
  if (data) {
    const renderCards = (data) => {
      if (data.getSubmissions.length > 0) {
        return data.getSubmissions.map(submission => {
          return <MusicianCard refetch={refetch}  user={user} key={submission.id} submission={submission} />
        });
      }
    }

    const showFilter = user && <div>
      <label>View All</label>
      <input type="radio" />
      <label>View Favorites</label>
      <input type="radio" />
    </div>


    return(
      <div className='admin-page'>
        {showFilter}
        <div className='admin-title-container'>
          <h2 className='admin-title'>Submissions</h2>
        </div>
        <div className='card-container'>
          { renderCards(data) }
        </div>
      </div>
    );
  }
}

export default AdminPage;
