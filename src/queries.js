import { gql } from '@apollo/client';

const GET_ADMIN = gql`
  {
    getAdmin(id: 1) {
      id
      username
      email
      submissions {
        id
        name
        email
        genre
        songTitle
        winner
        profileUrl
        videoUrl
        adminFavorite(adminId: 1)
      }
    }
  }
`

const GET_SUBMISSIONS = gql`
  {
    getSubmissions {
      id
      name
      songTitle
      winner
      videoUrl
      profileUrl
      adminFavorite(adminId: 1)
    }
  }
`

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

const GET_WINNER = gql`
  {
    getWinner {
      id
      name
      email
      genre
      songTitle
      winner
      profileUrl
      videoUrl
      adminFavorite(adminId: 1)
    }
  }
`

export { GET_ADMIN, GET_SUBMISSIONS, GET_SUBMISSION, GET_WINNER };
