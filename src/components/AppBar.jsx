import { View, ScrollView, Pressable } from 'react-native';
import Text from './Text';
import { Link, useNavigate } from 'react-router-native';
import { useApolloClient, useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';
import styles from '../styles';

const AppBar = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const { data, error, loading } = useQuery(ME);
  const navigate = useNavigate();
  if (error) {
    return <Text>error</Text>;
  }
  if (loading) {
    return <Text>loading...</Text>;
  }

  const handleLogout = async () => {
    console.log('logging out');
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate('/');
  };
  return (
  <View style={styles.appBarContainer}>
    <ScrollView horizontal>
      <View style = {styles.appBarTab}>
        <Link to='/'>
          <Text style={styles.appBarText} >Repositories</Text>
        </Link>
      </View>
      
      {data.me ? 
        <View style = {styles.appBarTab}>
          <Pressable onPress={handleLogout}>
            <Text style={styles.appBarText} >Sign out</Text>
          </Pressable>
        </View>
        :
        <View style = {styles.appBarTab}>
          <Link to='/login'>
            <Text style={styles.appBarText} >Sign in</Text>
          </Link>
        </View>
      }
      {data.me ? 
        <View style = {styles.appBarTab}>
          <Link to='/newReview'>
            <Text style={styles.appBarText} >New Review</Text>
          </Link>
        </View>
      :  
        <View style = {styles.appBarTab}>
          <Link to='/signUp'>
            <Text style={styles.appBarText} >Sign Up</Text>
          </Link>
        </View>
      }
      {data.me ? 
        <View style = {styles.appBarTab}>
          <Link to='/myReviews'>
            <Text style={styles.appBarText} >My reviews</Text>
          </Link>
        </View>
      :
        ''
      }
    </ScrollView>
  </View>
  );
};

export default AppBar;