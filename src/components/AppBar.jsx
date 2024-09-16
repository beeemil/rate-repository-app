import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme'
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: theme.colors.textSecondary
  },
  tab: {
    paddingHorizontal: 10,
    paddingBottom: 10
  },
  text: {
    color: "white",
    fontSize: theme.fontSizes.subheading,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBar = () => {
  return (
  <View style={styles.container}>
    <ScrollView horizontal>
      <View style = {styles.tab}>
        <Link to='/'>
          <Text style={styles.text} >Repositories</Text>
        </Link>
      </View>
      <View style = {styles.tab}>
        <Link to='/login'>
          <Text style={styles.text} >Sign in</Text>
        </Link>
      </View>
    </ScrollView>
  </View>
  );
};

export default AppBar;