import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppRouter from './src/routes/AppRouter';
import React from 'react';

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
