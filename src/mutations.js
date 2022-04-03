import { gql } from '@apollo/client';

const FAVORITE_SUBMISSION_ADMIN = gql `
  {
    favoriteSubmissionAdmin(input: {submission_id: Integer, admin_id: Integer}) {
      submissionAdmin {
        id
        submissionId
        adminId
        favorite
      }
    }
  }
`