import './MusicianCard.scss';

const MusicianCard = ({ user }) => {
  return (
    <div className='card' key={user.id}>
      <img
        src={`${user.profile}`}
        className='profile-img'
      />
      <p className='card-name'>{user.name}</p>
      <p className='card-song-title'>{user.song_title}</p>
    </div>
  );
}
 
export default MusicianCard;