import { gql, useMutation } from "@apollo/client";
import './Modal.scss';

const UPDATE_WINNER = gql`
  mutation ($id: ID!, $winner: Boolean!) {
    updateWinner(input: {id: $id, winner: $winner}) {
      submission {
        id
        name
        email
        genre
        songTitle
        winner
      }
    }
  }
`

const Modal = ({ name, setShowModal, id }) => {
  const [selectWinner, { loading, error, data }] = useMutation(UPDATE_WINNER, {
    variables: { id: id, winner: true }
  })

  const updateWinner = () => {
    selectWinner()
      .then(response => console.log(response.data.updateWinner.submission))
      .then(() => closeModal())
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="x-button-container">
          <button className="x-button" onClick={() => closeModal()}>X</button>
        </div>
        <div className="modal-text-container">
          <p className="modal-text">Are you sure you want to select {`${name}`} as the Troubadour winner?</p>
        </div>
        <div className="confirm-buttons-container">
          <button className="confirm-button" onClick={() => updateWinner()}>Select Winner</button>
          <button className="confirm-button" onClick={() => closeModal()}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;