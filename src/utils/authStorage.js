import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const token = await AsyncStorage.getItem(
      `${this.namespace}:token`
    );
    return token ? token : '';
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(
      `${this.namespace}:token`,
      accessToken
    );
    // Add the access token to the storage
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:token`);
    // Remove the access token from the storage
  }
}

export default AuthStorage;