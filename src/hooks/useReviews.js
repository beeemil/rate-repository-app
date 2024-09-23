import { useQuery } from "@apollo/client";
import { ME } from '../graphql/queries';

const useReviews = () => {
  const { data, error, loading } = useQuery(ME, {
    fetchPolicy: 'cache-and-network',
    variables: { includeReviews: true }
  });
  return {
    data,
    error,
    loading
  };
};

export default useReviews;