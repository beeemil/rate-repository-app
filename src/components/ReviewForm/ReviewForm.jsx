
import { TextInput, Pressable, View } from 'react-native';
import Text from '../Text';
import { useFormik } from 'formik';
import * as yup from 'yup';
import styles from '../../styles';

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner name is required'),
    repositoryName: yup
    .string()
    .required('Repository name is required'),
    rating: yup
    .number()
    .required('Rating score is required')
    .positive('Rating must be a positive number')
    .integer('Rating must be integer')
    .min(0)
    .max(100),
    text: yup
    .string()
});

const ReviewForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnChange: true,
  });
  let borderColorOwnerName = formik.touched.ownerName && formik.errors.ownerName ? 'red' : '#ccc';
  let borderColorRepositoryName = formik.touched.repositoryName && formik.errors.repositoryName ? 'red' : '#ccc';
  let borderColorRating = formik.touched.rating && formik.errors.rating ? 'red' : '#ccc';
  return (
    <View style={styles.formContainer}>
      {formik.touched.ownerName && formik.errors.ownerName && (
      <Text style={{ color: 'red' }}>{formik.errors.ownerName}</Text>)}
      <TextInput
        placeholder='Repository owner name'
        value={formik.values.ownerName}
        onChangeText={formik.handleChange('ownerName')}
        style={{ ...styles.input, borderColor: borderColorOwnerName }}
      />

      {formik.touched.repositoryName && formik.errors.repositoryName && (
      <Text style={{ color: 'red' }}>{formik.errors.repositoryName}</Text>)}
      <TextInput
        placeholder='Repository name'
        value={formik.values.repositoryName}
        onChangeText={formik.handleChange('repositoryName')}
        style={{ ...styles.input, borderColor: borderColorRepositoryName }}
      />

      {formik.touched.rating && formik.errors.rating && (
      <Text style={{ color: 'red' }}>{formik.errors.rating}</Text>)}
      <TextInput
        placeholder='Rating between 0 and 100'
        value={formik.values.rating.toString()}
        onChangeText={(value) => formik.setFieldValue('rating', Number(value))}
        style={{ ...styles.input, borderColor: borderColorRating }}
        keyboardType='numeric'
      />


      <TextInput
        placeholder='Review'
        value={formik.values.text}
        onChangeText={formik.handleChange('text')}
        style={{ ...styles.input }}
        multiline={true}
      />
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Submit form</Text>
      </Pressable>
    </View>
  );
};

export default ReviewForm;