import './MusicianCard.scss';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import starIcon from '../../assets/star-icon.png';
import { FAVORITE_SUBMISSION_ADMIN } from '../../mutations.js';

const MusicianCard = ({ submission, user }) => {

  const [favoriteSubmission, { data, loading, error }] = useMutation(FAVORITE_SUBMISSION_ADMIN);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const selectFavorite = async () => {
    const subId = Number(submission.id)
    const userId = Number(user.id)
    await favoriteSubmission({ variables: { submissionId: subId, adminId:  userId} })
  }


  const showFavoriteButton = user && <img onClick={selectFavorite} src={starIcon} className='star-icon' />

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