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
// const getSubmission = id => {
//   return const GET_SUBMISSION = gql`
//     {
//       getSubmission(id: ${id}) {
//         id
//         name
//         email
//         genre
//         songTitle
//         winner
//         profileUrl
//         videoUrl
//       }
//     }
//   `
// }

export { GET_ADMIN, GET_SUBMISSIONS }
// get all selected=true users (id, name, profile, genre)

// get all users
// const GET_ALL_USERS = gql`
//   {
//     fetchUsers {
//       id
//       name
//       profile
//       songTitle
//     }
//   }
// `;

// get user by id (id, name, email, genre, song_title, profile, video, selected)

// create mutation: add new user (name, email, genre, song_title, profile, video)
// const CREATE_USER = gql`
//   mutation CreateUser(
//     $name: String!
//     $email: String!
//     $genre: String!
//     $songTitle: String!
//     $profile: String!
//     $video: String!
//   ) {
//     createUser(
//       name: $name,
//       email: $email,
//       genre: $genre,
//       songTitle: $songTitle,
//       profile: $profile,
//       video: $video
//     ) {
//       id
//       name
//       email
//       genre
//       songTitle
//       profile
//       video
//     }
//   }
// `;

// update mutation: change selected status (id, selected)

// export { CREATE_USER, GET_ALL_USERS };