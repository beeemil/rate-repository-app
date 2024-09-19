import { FlatList, View, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import Text from './Text';
import RepositoryItem from './RepositoryItem';
import { GET_REPOSITORIES } from '../graphql/queries';
// import AuthStorage from '../utils/authStorage';
// import { useState } from 'react';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;
const RepositoryList = () => {
  // const [ token, setToken ] = useState('');
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  });
  // Get the nodes from the edges array
  if (loading) {
    return (
      <Text>Loading repositories...</Text>
    );
  }
  if (error) {
    return (
      <Text color='red'>Error retrieving repositories</Text>
    );
  }
  if (data) {
  const repositories = data.repositories;
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({item, index }) => (
          <RepositoryItem key={index} repository={item}/>
        )}
      />
    );
  }
  };

export default RepositoryList;