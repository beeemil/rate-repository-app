import { NEW_REVIEW } from "../graphql/mutations";
import { useApolloClient, useMutation } from "@apollo/client";

const useNewReview = () => {
  const [mutate, result] = useMutation(NEW_REVIEW);
  const apolloClient = useApolloClient();
  const newReview = async ({ ownerName, rating, repositoryName, text }) => {
    try {
      await mutate({ variables: {
        review: {
          ownerName, 
          rating, 
          repositoryName,
          text
        }}});
      apolloClient.resetStore();
    } catch (error) {
      console.error('error',error);
    }
  };
  return [newReview, result];
};

export default useNewReview;