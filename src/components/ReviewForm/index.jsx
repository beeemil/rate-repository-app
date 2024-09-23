import ReviewForm from './ReviewForm';
import useNewReview from '../../hooks/useNewReview';
import { useNavigate } from 'react-router-native';

const NewReview = () => {
  const navigate = useNavigate();
  const [newReview] = useNewReview();
  const onSubmit = async (values) => {
    const { ownerName, rating, repositoryName, text } = values;
    try {
      await newReview({
        ownerName: ownerName, 
        rating: rating,
        repositoryName: repositoryName,
        text: text,
      });
      navigate(`/${ownerName}.${repositoryName}`);
    }
    catch (e) {
      console.log('errori',e);
    }
  };
  return <ReviewForm onSubmit={onSubmit}/>;
};

export default NewReview;