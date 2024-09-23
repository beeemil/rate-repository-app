import SignInForm from './SignInForm';
import useSignIn from '../../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const UserLogin = () => {
  const navigate = useNavigate();
  const [signIn] = useSignIn();
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signIn({ username:username, password:password });
      navigate('/');
    }
    catch (e) {
      console.log('errori',e);
    }
  };
  return <SignInForm onSubmit={onSubmit}/>;
};

export default UserLogin;