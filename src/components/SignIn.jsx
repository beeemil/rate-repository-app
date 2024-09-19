import Text from './Text';
import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    padding: 16, // Padding around the form
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 12,
    marginBottom: 16, // Space between inputs
    fontSize: 16,
    fontFamily: theme.fonts.main
  },
  button: {
    backgroundColor: '#007bff', // Blue background
    borderRadius: 5,
    paddingVertical: 12, // Vertical padding for height
    alignItems: 'center', // Center the text
    
  },
  buttonText: {
    color: '#fff', // White text color
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: theme.fonts.main
  },
});

const initialValues = {
  username: '',
  password: ''
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
  });
  let borderColorUsername = formik.touched.username && formik.errors.username ? 'red' : '#ccc';
  let borderColorPassword = formik.touched.password && formik.errors.password ? 'red' : '#ccc';
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Username'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        onBlur={formik.handleBlur('username')}
        style={{ ...styles.input, borderColor: borderColorUsername }}
      />
       {formik.touched.username && formik.errors.username && (
        <Text style={{ color: 'red' }}>{formik.errors.username}</Text>)}
      <TextInput
        placeholder='password'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        secureTextEntry={true}
        style={{ ...styles.input, borderColor: borderColorPassword }}
      />
        {formik.touched.password && formik.errors.password && (
        <Text style={{ color: 'red' }}>{formik.errors.password}</Text>)}
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text>log in</Text>
      </Pressable>
    </View>
  );
};

const UserLogin = () => {
  const navigate = useNavigate();
  const [signIn] = useSignIn();
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const dat = await signIn({ username:username, password:password });
      console.log('dat',dat);
      navigate('/');
    }
    catch (e) {
      console.log('errori',e);
    }
  };
  return <SignInForm onSubmit={onSubmit}/>;
};

export default UserLogin;