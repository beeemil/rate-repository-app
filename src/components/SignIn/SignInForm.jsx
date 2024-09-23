import Text from '../Text';
import { TextInput, Pressable, View } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import styles from '../../styles';

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
    <View style={styles.formContainer}>
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
        placeholder='Password'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        secureTextEntry={true}
        style={{ ...styles.input, borderColor: borderColorPassword }}
      />
        {formik.touched.password && formik.errors.password && (
        <Text style={{ color: 'red' }}>{formik.errors.password}</Text>)}
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>log in</Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;