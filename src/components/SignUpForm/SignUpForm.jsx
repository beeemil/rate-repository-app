import Text from '../Text';
import { TextInput, Pressable, View } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import styles from '../../styles';

const initialValues = {
  username: '',
  password: '',
  confirmPassword: ''
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(5)
    .max(30),
  password: yup
    .string()
    .required('Password is required')
    .min(5)
    .max(30),
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password'), null], 'Passwords must match') // Compare confirmPassword with password
});

const SignUpForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
  });
  let borderColorUsername = formik.touched.username && formik.errors.username ? 'red' : '#ccc';
  let borderColorPassword = formik.touched.password && formik.errors.password ? 'red' : '#ccc';
  let borderColorConfirmPassword = formik.touched.confirmPassword && formik.errors.confirmPassword ? 'red' : '#ccc';
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

      <TextInput
        placeholder='Password confirmation'
        value={formik.values.confirmPassword}
        onChangeText={formik.handleChange('confirmPassword')}
        onBlur={formik.handleBlur('confirmPassword')}
        secureTextEntry={true}
        style={{ ...styles.input, borderColor: borderColorConfirmPassword }}
      />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
        <Text style={{ color: 'red' }}>{formik.errors.confirmPassword}</Text>)}
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>log in</Text>
      </Pressable>
    </View>
  );
};

export default SignUpForm;