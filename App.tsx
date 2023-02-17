import {StyleSheet, Text, View} from 'react-native';
import AppRouter from './src/routes/AppRouter';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <AppRouter />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
