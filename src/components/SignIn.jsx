import Text from './Text';
import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import theme from '../theme';
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
}

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
  })
  let borderColorUsername = formik.touched.username && formik.errors.username ? 'red' : '#ccc'
  let borderColorPassword = formik.touched.password && formik.errors.password ? 'red' : '#ccc'
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Username'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        style={{ ...styles.input, borderColor: borderColorUsername }}
      />
       {formik.touched.username && formik.errors.username && (
        <Text style={{ color: 'red' }}>{formik.errors.username}</Text>)}
      <TextInput
        placeholder='password'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        secureTextEntry={true}
        style={{ ...styles.input, borderColor: borderColorPassword }}
      />
        {formik.touched.password && formik.errors.password && (
        <Text style={{ color: 'red' }}>{formik.errors.password}</Text>)}
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text>log in</Text>
      </Pressable>
    </View>
  )
};

const UserLogin = () => {
  const onSubmit = values => {
    const username = values.username
    const password = values.password
    console.log('username',username)
    console.log('password',password)
    
  }
  return <SignInForm onSubmit={onSubmit}/>
}

export default UserLogin;