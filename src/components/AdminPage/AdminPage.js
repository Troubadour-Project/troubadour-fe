import { useState } from 'react';
import './AdminPage.scss';
import MusicianCard from '../MusicianCard/MusicianCard';
import { useQuery } from '@apollo/client';
import { GET_SUBMISSIONS } from '../../queries';

const AdminPage = ({ user }) => {
  const [allSubmissions, setAllSubmissions] = useState([]);

  const { loading, error, data } = useQuery(GET_SUBMISSIONS);

  if (loading) return 'Loading...';
  if (error) return <p>error: {error.message}</p>;
  if (data) {
    const renderCards = (data) => {
      if (data.getSubmissions.length > 0) {
        return data.getSubmissions.map(submission => {
          return <MusicianCard key={submission.id} submission={submission} />
        });
      }
    }

    return(
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
}

export default AdminPage;
