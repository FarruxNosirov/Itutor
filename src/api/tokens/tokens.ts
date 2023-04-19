import AsyncStorage from '@react-native-async-storage/async-storage';
const Values = {
  ACCESS_TOKEN: 'accessToken',
  isAuthorization: false,
} as const;

const tokens = {
  saveToken: async (accessToken: string) => {
    await AsyncStorage.setItem(Values.ACCESS_TOKEN, accessToken);
  },
  getAccessToken: async () => {
    return await AsyncStorage.getItem(Values.ACCESS_TOKEN);
  },
  clear: async () => {
    await AsyncStorage.removeItem(Values.ACCESS_TOKEN);
  },
};
export default tokens;
