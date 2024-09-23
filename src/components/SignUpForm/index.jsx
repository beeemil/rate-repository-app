import SignUpForm from './SignUpForm';
import useSignUp from '../../hooks/useSignUp';
import useSignIn from '../../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const UserSignUp = () => {
  const navigate = useNavigate();
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log('usernamepasswrod',username,password);
    try {
      await signUp({ username: username, password: password });
      await signIn({ username: username, password: password });
      navigate('/');
    }
    catch (e) {
      console.log('errori',e);
    }
  };
  return <SignUpForm onSubmit={onSubmit}/>;
};

export default UserSignUp;