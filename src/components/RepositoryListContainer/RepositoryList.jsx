import { FlatList, View, Pressable } from "react-native";
import RepositoryItem from "../RepositoryItem/RepositoryItem";
import styles from '../../styles';
import { useNavigate } from 'react-router-native';

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = ({ repositoryNodes, onEndReach }) => {
  const navigate = useNavigate();
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      renderItem={({item, index }) => (
        <Pressable onPress={() => navigate(`/${item.id}`)}>
          <RepositoryItem key={index} repository={item} single={false}/>
        </Pressable>
      )}
    />
  );
};

export default RepositoryList;