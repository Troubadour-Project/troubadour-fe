import { useEffect, useState } from 'react';
import './AdminPage.scss';
import MusicianCard from '../MusicianCard/MusicianCard';
import Error from '../Error/Error';
import UploadingSpinner from '../UploadingSpinner/UploadingSpinner';
import { useQuery } from '@apollo/client';
import { GET_SUBMISSIONS } from '../../queries';

const AdminPage = ({ user, client }) => {
  const [isFilteredSelected, setIsFilteredSelected] = useState(false);

  const { loading, error, data, refetch } = useQuery(GET_SUBMISSIONS);

  useEffect(() => {
    refetch()
  }, [])
  
  useEffect(() => {
    return () => {client.resetStore()}
  }, [])

  if (loading || !data) {
    return (
      <div className="loading-container">
        <UploadingSpinner />
      </div>
    );
  }
  if (error) return <Error error={error} />;
  if (data) {
    const handleAllSubmissions = () => {
      setIsFilteredSelected(false)
    }
    const handleFavorites = () => {
      setIsFilteredSelected(true)
    }

    const allSubmissions = data.getSubmissions.map(submission => {
      return <MusicianCard refetch={refetch} user={user} key={submission.id} submission={submission}/>
    })

    const filteredSubmissions = data.getSubmissions.filter(submission => submission.adminFavorite).map(submission => {
      return <MusicianCard refetch={refetch} user={user} key={submission.id} submission={submission}/>
    })

    const showFilter = user && <div>
      <label>View All</label>
      <input className="radio-button all-radio" type="radio" name="filter" defaultChecked onChange={() => handleAllSubmissions()} />
      <label>View Favorites</label>
      <input className="radio-button fav-radio" type="radio" name="filter" onChange={() => handleFavorites()}  />
    </div>

    const cardsForDisplay = isFilteredSelected ? filteredSubmissions : allSubmissions
    
    const messageOrCards = cardsForDisplay.length ? cardsForDisplay : <p>No favorites selected yet! Please add some!</p>

    return(
      <div className='admin-page'>
        {showFilter}
        <div className='admin-title-container'>
          <h2 className='admin-title'>Submissions</h2>
        </div>
        <div className='card-container'>
          { messageOrCards }
        </div>
      </div>
    );
  }
}

export default AdminPage;
