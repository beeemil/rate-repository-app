import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';  // Make sure you have this if using Constants
import theme from './theme';  // Import your theme.js

const styles = StyleSheet.create({
  // AppBar styles
  appBarContainer: {
    paddingTop: Constants.statusBarHeight,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: theme.colors.textSecondary,
  },
  appBarTab: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  appBarText: {
    color: 'white',
    fontSize: theme.fontSizes.subheading,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.bold,
  },

  // RepositoryList styles
  repositoryListContainer: {
    flexGrow: 1,
    flexShrink: 1,
  },
  repositoryListText: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },

  // Separator styles
  separator: {
    height: 10,
  },

  // Form styles (e.g., SignIn form)
  formContainer: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    fontFamily: theme.fonts.main,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: theme.fonts.main,
  },

  // RepositoryItem styles
  repositoryItemContainer: {
    padding: 15,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 5,
    elevation: 3,  // Shadow for Android
    shadowColor: '#000',  // Shadow for iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    fontFamily: theme.fonts.main,
  },
  repositoryItemHeader: {
    flexDirection: 'row',
    marginBottom: 10,
    fontFamily: theme.fonts.main,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  headerText: {
    flex: 1,
    fontFamily: theme.fonts.main,
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
    fontFamily: theme.fonts.main,
  },
  language: {
    marginTop: 5,
    paddingVertical: 4,
    paddingHorizontal: 6,
    backgroundColor: '#0366d6',
    color: 'white',
    borderRadius: 4,
    alignSelf: 'flex-start',
    fontFamily: theme.fonts.main,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    fontFamily: theme.fonts.main,
  },
  statItem: {
    alignItems: 'center',
    fontFamily: theme.fonts.main,
  },
  statValue: {
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: theme.fonts.main,
  },
  statLabel: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
    fontFamily: theme.fonts.main,
  },
  reviewContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  ratingContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: theme.colors.primary, // Primary color for the border
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  rating: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    fontSize: 18,
  },
  contentContainer: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    fontSize: theme.fontSizes.subheading,
  },
  date: {
    color: theme.colors.textSecondary,
    marginBottom: 5,
  },
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
  },
});

export default styles;
