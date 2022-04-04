import { gql } from '@apollo/client';

const FAVORITE_SUBMISSION_ADMIN = gql `
mutation ($submissionId: Int!, $adminId: Int!) {
  favoriteSubmissionAdmin(input:
    {submissionId: $submissionId, adminId: $adminId} ) {
    submissionAdmin {
      id
      submissionId
      adminId
      favorite
    }
  }
}
`

export {FAVORITE_SUBMISSION_ADMIN}