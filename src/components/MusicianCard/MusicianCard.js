import './MusicianCard.scss';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import starIcon from '../../assets/star-icon.png';
import goldStar from '../../assets/gold-star.png';
import { FAVORITE_SUBMISSION_ADMIN } from '../../mutations.js';

const MusicianCard = ({ submission, user, refetch }) => {
  const [favoriteSubmission] = useMutation(FAVORITE_SUBMISSION_ADMIN);

  const selectFavorite = async (evt) => {
    evt.preventDefault()
    await favoriteSubmission({ variables: { submissionId: Number(submission.id), adminId:  Number(user.id)} })
    refetch()
  }


  const showFavoriteButton = user && <img onClick={selectFavorite} src={submission.adminFavorite ? goldStar : starIcon } className='star-icon' />

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