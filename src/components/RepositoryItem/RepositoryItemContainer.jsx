import useRepository from "../../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import { FlatList } from "react-native";
import { useParams } from "react-router-native";
import ReviewItem from "../Reviews/ReviewItem";


const RepositoryItemContainer = () => {
  const { id } = useParams();
  const { repository, loading, fetchMore } = useRepository({
    first: 2,
    repositoryId: id });
  const onEndReach = () => {
    console.log('end');
    fetchMore();
  };
  if (!loading) {
  const { reviews, ...repositoryItem } = repository;
  const reviewNodes = reviews.edges.map(edge => edge.node) || [];
  return (
    <FlatList
      data={reviewNodes}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      renderItem={({ item }) => <ReviewItem review={item} myReviews={false}/>}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem repository={repositoryItem} single={true}/>}
      />
  );
}
};

export default RepositoryItemContainer;