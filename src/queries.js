import { gql } from '@apollo/client';

// get all selected=true users (id, name, profile, genre)

// get all users
const GET_ALL_USERS = gql`
  query fetchUsers {
    users {
      id
      name
      profile
      genre
    }
  }
`

// get user by id (id, name, email, genre, song_title, profile, video, selected)

// create mutation: add new user (name, email, genre, song_title, profile, video)
const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $email: String!
    $genre: String!
    $songTitle: String!
    $profile: Sting!
    $video: String!
  ) {
    createUser(
      name: $name,
      email: $email,
      genre: $genre,
      songTitle: $songTitle,
      profile: $profile,
      video: $video
    ) {
      id
      name
      email
      genre
      songTitle
      profile
      video
    }
  }
`;

// update mutation: change selected status (id, selected)

export { CREATE_USER, GET_ALL_USERS };