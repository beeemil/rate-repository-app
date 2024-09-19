import { SIGN_IN } from "../graphql/mutations";
import { useApolloClient, useMutation } from "@apollo/client";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { credentials: {username: username, password: password}}});
    await authStorage.setAccessToken(data.authenticate.accessToken);
    apolloClient.resetStore();
    // call the mutate function here with the right arguments
  };
  // console.log('result',result);
  return [signIn, result];
};

export default useSignIn;