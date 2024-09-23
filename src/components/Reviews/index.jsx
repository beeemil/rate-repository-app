import useReviews from "../../hooks/useReviews";
import { FlatList } from "react-native";
import ReviewItem from "../Reviews/ReviewItem";


const Reviews = () => {
  const { data, loading, error } = useReviews();
  if (error) {
    console.log('error',error);
  }
  if (!loading) {
  const reviews = data.me.reviews;
  const reviewNodes = reviews.edges.map(edge => edge.node) || [];
  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} myReviews={true}/>}
      keyExtractor={({ id }) => id}
      />
  );
}
};

export default Reviews;