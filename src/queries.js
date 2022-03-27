import { gql, useMutation } from '@apollo/client';

// get all selected=true users (id, name, profile, genre)

// get all users (id, name, profile, song_title)

// get user by id (id, name, email, genre, song_title, profile, video, selected)

// create mutation: add new user (name, email, genre, song_title, profile, video)
const ADD_NEW_USER = gql`
  mutation AddNewUser(
    $name: String!
    $email: String!
    $genre: String!
    $songTitle: String!
    $profile: Sting!
    $video: String!
  ) {
    addNewUser(
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