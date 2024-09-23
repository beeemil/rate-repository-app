import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import * as Linking from 'expo-linking';
import styles from '../../styles';

const RepositoryItem = ({ repository, single }) => {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
    url
  } = repository;
  const formatThousands = value => {
    return value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value;
  };

  return (
    <View testID="repositoryItem" style={styles.repositoryItemContainer}>
        <View style={styles.repositoryItemHeader}>
          <Image source={{ uri: ownerAvatarUrl }} style={styles.avatar} />
          <View style={styles.headerText}>
            <Text style={styles.fullName} testID='fullName'>{fullName}</Text>
            <Text style={styles.description} testID='description'>{description}</Text>
            <Text style={styles.language} testID='language'>{language}</Text>
          </View>
        </View>
        <View style={styles.stats}>
          <View style={styles.statItem} >
            <Text style={styles.statValue} testID='starCount'>{formatThousands(stargazersCount)}</Text>
            <Text style={styles.statLabel}>Stars</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue} testID='forkCount'>{formatThousands(forksCount)}</Text>
            <Text style={styles.statLabel}>Forks</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue} testID='reviewCount'>{reviewCount}</Text>
            <Text style={styles.statLabel}>Reviews</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue} testID='ratingAverage'>{ratingAverage}</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
        </View>
        {single ? 
          <Pressable onPress={() => Linking.openURL(url)} style={styles.button}>
            <Text style={styles.buttonText}>Open in GitHub</Text>
          </Pressable>
        : ''}
    </View>
  );
};

export default RepositoryItem;
