import { useQuery, gql } from "@apollo/client";
import "./SubmissionDetailsPage.scss";
import MusicianCard from "../MusicianProfile/MusicianProfile";
// import { GET_SUBMISSION } from '../../queries';

const GET_SUBMISSION = gql`
    query ($id: ID!){
      getSubmission(id: $id) {
        id
        name
        email
        genre
        songTitle
        winner
        profileUrl
        videoUrl
      }
    }
  `

//   const GET_DOG_PHOTO = gql`
//   query Dog($breed: String!) {
//     dog(breed: $breed) {
//       id
//       displayImage
//     }
//   }
// `;

const SubmissionDetailsPage = () => {
  const { loading, error, data } = useQuery(GET_SUBMISSION, {
    variables: { id: 5 }
  });

  if (loading) return <p>loading...</p>
  if (error) return <p>{error.message}</p>
  console.log(data)
  return(
    <div className="details-container">
      <MusicianCard />
      <div className="submission-video">

        <video src={data.getSubmission.videoUrl} controls className="video-container"/>
      </div>
    </div>
  )
}

export default SubmissionDetailsPage