import { useEffect, useState } from 'react';
import './AdminPage.scss';
import MusicianCard from '../MusicianCard/MusicianCard';
import { useQuery } from '@apollo/client';
import { GET_SUBMISSIONS } from '../../queries';

const AdminPage = ({ user }) => {
  // const [data, setData] = useState([])
  const [isFilteredSelected, setIsFilteredSelected] = useState(false)
  const { loading, error, data, refetch } = useQuery(GET_SUBMISSIONS);
  console.log(data)
  useEffect(() => {
    refetch()
  }, [])

  // const filterFavorites = () => {
  //   setData({getSubmissions: data.getSubmissions.filter(sub => sub.adminFavorite)})
  // }

  if (loading || !data) return 'Loading...';
  if (error) return <p>error: {error.message}</p>;
  if (data) {
    // const renderCards = (data) => {
    //   if (data.getSubmissions.length > 0) {
    //     return data.getSubmissions.map(submission => {
    //       return <MusicianCard refetch={refetch}  user={user} key={submission.id} submission={submission} />
    //     });
    //   }
    // }
    // const handleFavorites = data => {
    //   setIsFilteredSelected(true)
    //   const filteredFavorites = data.getSubmissions.filter(submission => submission.adminFavorite)
    //   return filteredFavorites.map(submission => {
    //     return <MusicianCard refetch={refetch} user={user} key={submission.id} submission={submission}/>
    //   })
    // }

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
      <input type="radio" name="filter" defaultChecked onChange={() => handleAllSubmissions()} />
      <label>View Favorites</label>
      {/* <input type="radio" name="filter" onChange={() => filterFavorites()}  /> */}
      <input type="radio" name="filter" onChange={() => handleFavorites()}  />
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
          {/* { cardsForDisplay } */}
          { messageOrCards }
        </div>
      </div>
    );
  }
}

export default AdminPage;
