import { StatusBar } from "expo-status-bar";
import React from "react";
import LoginPage from "./components/LoginPage";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  BlackOpsOne_400Regular,
} from "@expo-google-fonts/black-ops-one";
import { ArchitectsDaughter_400Regular } from "@expo-google-fonts/architects-daughter";

const App = () => {
  let [fontsLoaded] = useFonts({
    BlackOpsOne_400Regular,
    ArchitectsDaughter_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.appBackground}>
        <Text style={styles.title}>Stash</Text>
        <Text style={styles.description}>Enjoy your privacy !</Text>
        <LoginPage />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  appBackground: {
    backgroundColor: "#DCDCDC",
    height: "100%",
  },
  title: {
    fontSize: 80,
    textAlign: "center",
    fontFamily: "BlackOpsOne_400Regular",
    letterSpacing: 10,
    marginTop: "20%",
    color: "#95A59E",
  },
  description: {
    fontSize: 10,
    letterSpacing: 4,
    fontFamily: "ArchitectsDaughter_400Regular",
    alignSelf: "center",
    color: "#95A59E",
    marginBottom: "10%"
  },
});

export default App;
