import { StatusBar } from 'expo-status-bar';
import React from 'react';
import LoginPage from './components/LoginPage';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {

  return (
    <View style={styles.appBackground}>
    <LoginPage />
    </View>
  );
}

const styles = StyleSheet.create({
  appBackground: {
    backgroundColor: "#DCDCDC",
    flex: 1,
    height: 100
  },

})

export default App




