import { SIGN_UP } from "../graphql/mutations";
import { useApolloClient, useMutation } from "@apollo/client";

const useSignUp = () => {
  const [mutate, result] = useMutation(SIGN_UP);
  const apolloClient = useApolloClient();
  const signUp = async ({ username, password }) => {
    await mutate({ variables: { user: {username: username, password: password }}});
    apolloClient.resetStore();
  };
  return [signUp, result];
};

export default useSignUp;