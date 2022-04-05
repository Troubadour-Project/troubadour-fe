import { Link } from 'react-router-dom';
import './Error.scss';

const Error = ({ message }) => {
  return (
    <div className="error-container">
      <p className="error-message">{ message }</p>
      <Link to='/'>
        <button className="home-button">Back To Home Page</button>
      </Link>
    </div>
  )
}

export default Error;