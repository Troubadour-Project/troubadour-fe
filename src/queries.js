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
    $song_title: String!
    $profile: Sting!
    $video: String!
  ) {
    addNewUser(
      name: $name,
      email: $email,
      genre: $genre,
      song_title: $song_title,
      profile: $profile,
      video: $video
    ) {
      id
      createdAt
      name
      email
      genre
      song_title
      profile
      video
    }
  }
`;

// update mutation: change selected status (id, selected)