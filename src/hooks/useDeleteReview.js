import { DELETE_REVIEW } from "../graphql/mutations";
import { useApolloClient, useMutation } from "@apollo/client";

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW);
  const apolloClient = useApolloClient();
  const deleteReview = async (deleteReviewId) => {
    try {
      await mutate({ variables: {deleteReviewId }});
      apolloClient.resetStore();
    } catch (error) {
      console.error('error',error);
    }
  };
  return [deleteReview, result];
};

export default useDeleteReview;