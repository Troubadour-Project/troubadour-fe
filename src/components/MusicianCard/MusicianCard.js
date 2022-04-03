import './MusicianCard.scss';
import { Link } from 'react-router-dom';
import starIcon from '../../assets/star-icon.png'

const MusicianCard = ({ submission, user }) => {
  const showFavoriteButton = user && <img src={starIcon} className='star-icon' />

  return (
    <Link to={`/submissions/${submission.id}`} key={submission.id}>
      <div className='card' >
        {showFavoriteButton}
        <img
          src={`${submission.profileUrl}`}
          className='profile-img'
        />
        <p className='card-name'>{submission.name}</p>
        <p className='card-song-title'>{submission.songTitle}</p>
      </div>
    </Link>
  );
}

export default MusicianCard;