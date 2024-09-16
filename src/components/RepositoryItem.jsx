import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import theme from '../theme';
const RepositoryItem = ({ repository }) => {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
  } = repository;

  // Format the numbers with 'k' for thousands
  const formatThousands = value => {
    return value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: ownerAvatarUrl }} style={styles.avatar} />
        <View style={styles.headerText}>
          <Text style={styles.fullName}>{fullName}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.language}>{language}</Text>
        </View>
      </View>

      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{formatThousands(stargazersCount)}</Text>
          <Text style={styles.statLabel}>Stars</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{formatThousands(forksCount)}</Text>
          <Text style={styles.statLabel}>Forks</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{reviewCount}</Text>
          <Text style={styles.statLabel}>Reviews</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{ratingAverage}</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 5,
    elevation: 3, // shadow for Android
    shadowColor: '#000', // shadow for iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    fontFamily: theme.fonts.main
  },
  header: {
    flexDirection: 'row',
    marginBottom: 10,
    fontFamily: theme.fonts.main
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  headerText: {
    flex: 1,
    fontFamily: theme.fonts.main
  },
  fullName: {
    fontSize: 16,
    fontFamily: theme.fonts.main,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
    fontFamily: theme.fonts.main
  },
  language: {
    marginTop: 5,
    paddingVertical: 4,
    paddingHorizontal: 6,
    backgroundColor: '#0366d6',
    color: 'white',
    borderRadius: 4,
    alignSelf: 'flex-start',
    fontFamily: theme.fonts.main
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    fontFamily: theme.fonts.main
  },
  statItem: {
    alignItems: 'center',
    fontFamily: theme.fonts.main
  },
  statValue: {
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: theme.fonts.main
  },
  statLabel: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
    fontFamily: theme.fonts.main
  },
});

export default RepositoryItem;
