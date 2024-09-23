import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation SignIn($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      user {
        id
        username
      }
      accessToken
      expiresAt
    }
  }
`;

export const SIGN_UP = gql`
  mutation Mutation($user: CreateUserInput) {
    createUser(user: $user) {
      username
      id
    }
  }
`;

export const NEW_REVIEW = gql`
  mutation Mutation($review: CreateReviewInput) {
    createReview(review: $review) {
      userId
      user {
        username
        reviewCount
        id
        createdAt
      }
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation Mutation($deleteReviewId: ID!) {
    deleteReview(id: $deleteReviewId)
  }
`;