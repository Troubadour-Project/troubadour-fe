import './MusicianCard.scss';

const MusicianCard = ({ user }) => {
  return (
    <div className='card' key={user.id}>
      <img
        src={`${user.profileUrl}`}
        className='profile-img'
      />
      <p className='card-name'>{user.name}</p>
      <p className='card-song-title'>{user.songTitle}</p>
    </div>
  );
}
 
export default MusicianCard;