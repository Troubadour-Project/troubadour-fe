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

export { GET_ADMIN, GET_SUBMISSIONS };
