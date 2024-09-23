
import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import SignIn from './SignIn';
import AppBar from './AppBar';
import RepositoryItemContainer from './RepositoryItem/RepositoryItemContainer';
import RepositoryListContainer from './RepositoryListContainer';
import NewReview from './ReviewForm';
import UserSignUp from './SignUpForm';
import Reviews from './Reviews';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Routes>
        <Route path="/:id" element={<RepositoryItemContainer/>} />
        <Route path="/" element={<RepositoryListContainer />} />
        <Route path="/newReview" element={<NewReview />} />
        <Route path="/myReviews" element={<Reviews/>}/>
        <Route path="/login" element={<SignIn />} />
        <Route path="/signUp" element={<UserSignUp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;