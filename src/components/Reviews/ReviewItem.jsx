import { View, Text, Pressable, Alert } from "react-native";
import useDeleteReview from "../../hooks/useDeleteReview";
import styles from "../../styles";
import { useNavigate } from "react-router-native";

const ReviewItem = ({ review, myReviews }) => {
  const formattedDate = new Date(review.createdAt).toLocaleDateString('fi-FI');
  const [deleteReview] = useDeleteReview();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await deleteReview(id);
    } catch (e) {
      console.log('error', e);
    }
  };
  const createTwoButtonAlert = () =>
    Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
      {
        text: 'CANCEL',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'DELETE', onPress: () => handleDelete(review.id)},
    ]);
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{review.rating}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.username}>{myReviews ? review.repository.fullName : review.user.username}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
        <Text style={styles.text}>{review.text}</Text>
        {myReviews ? 
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Pressable onPress={() => navigate(`/${review.repository.id}`)} style={{ ...styles.button, flex: 1, marginRight: 10 }}>
              <Text style={styles.buttonText}>View repository</Text>
            </Pressable>
            <Pressable onPress={createTwoButtonAlert} style={{ ...styles.button, flex: 1, backgroundColor: 'red' }}>
              <Text style={styles.buttonText}>Delete</Text>
            </Pressable>
          </View>
        : ''}
      </View>
    </View>
  );
};

export default ReviewItem;