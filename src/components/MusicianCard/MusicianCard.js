import './MusicianCard.scss';
import { Link } from 'react-router-dom';

const MusicianCard = ({ submission }) => {
  return (
    <Link to={`/submissions/${submission.id}`} key={submission.id}>
      <div className='card' >
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