import { Link } from 'react-router-dom';
import './Error.scss';

const Error = ({ error }) => {
  let message = '';
  let showHomeButton = true;

  if (!error) {
    message = 'Looks like that page does not exist.';
  }
  
  if (error.graphQLErrors) {
    message = 'Something went wrong, please try again.';
  }
  
  if (error.clientErrors) {
    message = 'Sorry, we couldn\'t find that. Please try again.';
  }
  
  if (error.networkError) {
    message = 'We\'re having trouble on our end. Please try again later.'
    showHomeButton = false;
  }

  const homeButton = showHomeButton &&
    <Link to='/'>
      <button className="home-button">Back To Home Page</button>
    </Link>

  return (
    <div className="error-container">
      <p className="error-message">{ message }</p>
      { homeButton }
    </div>
  )
}

export default Error;