import { gql } from '@apollo/client';

// get admin user:
// const GET_ADMIN_USER = gql`
//   {
//     admin {
//       id
//       name
//       votes (I'm thinking maybe an array of admin_submission objects)
//     }
//   }
// `



// get all selected=true submissions (id, name, profile, genre):
// const GET_WINNERS = gql`
//   {
//     submission(selected: true) {
//       id
//       profile
//       name
//       genre
//     }
//   }
// `



// get all submissions:
const GET_ALL_SUBMISSIONS = gql`
  {
    fetchUsers {
      id
      name
      profile
    }
  }
`;
  // {
  //   submission {
  //     id
  //     name
  //     profile
  //     songTitle
  //   }
  // }




// get submission by id (id, name, email, genre, song_title, profile, video, selected):
  // const GET_SINGLE_SUBMISSION = gql`
  //   {
  //     submission(id: $id) {
  //       id
  //       name
  //       genre
  //       songTitle
  //       profile
  //       video
  //       selected
  //     }
  //   }
  // `



// update mutation: change selected status (id, selected)
// const UPDATE_SUBMISSION = gql`
//     mutation UpdateSubmission($id, $selected) {
//       updateSubmission(id: $id) {
//         selected: $selected
//       }
//     }
// `



// post request: add new submission (name, email, genre, sonTitle, profile, video)
// const postSubmission = (submissionData) => {
//   return fetch('https://troubadour-be.herokuapp.com/graphql', {
//     method: "POST",
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     },
//     body: 
//   })
// }


export { GET_ALL_SUBMISSIONS };