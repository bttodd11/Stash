import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  BlackOpsOne_400Regular,
} from "@expo-google-fonts/black-ops-one";
import { ArchitectsDaughter_400Regular } from "@expo-google-fonts/architects-daughter";
import Position from 'react-native/Libraries/Components/Touchable/Position';

const LoginPage = (props) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userName, setUserName ] = React.useState("");
  const [signIn, toggleSignIn] = React.useState(true);
  let [fontsLoaded] = useFonts({
    BlackOpsOne_400Regular,
    ArchitectsDaughter_400Regular,
  });



  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        {signIn ? (
          <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                onChangeText={() => setFirstName(firstName)}
                value={firstName}
                placeholder={"First Name "}
              />
              <TextInput
                style={styles.input}
                onChangeText={() => setLastName(lastName)}
                value={lastName}
                placeholder={"Last Name"}
              />
              <TextInput
                style={styles.input}
                onChangeText={() => setEmail(email)}
                value={email}
                placeholder={"Email"}
              />
              <TextInput
                style={styles.input}
                onChangeText={() => setPassword(password)}
                value={password}
                placeholder={"Password"}
              />
              <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => console.log("Test")}
              underlayColor="#26CF8A"
            >
              <Text style={styles.loginButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={styles.signInText}>
              Have an account?
              <Text style={styles.signIn} onPress={() => toggleSignIn(false)}>
                Sign In
              </Text>
            </Text>
          </View>
          </View>
        ) : (
          <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            onChangeText={() => setUserName(userName)}
            value={userName}
            placeholder={"User Name"}
          />
          <TextInput
            style={styles.input}
            onChangeText={() => setPassword(password)}
            value={password}
            placeholder={"Password"}
          />
          
          <View style={styles.buttonContainer}>
          <TouchableOpacity
        style={styles.loginButton}
        onPress={() => console.log("Test")}
        underlayColor='#26CF8A'>
        <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.signInText}>Dont have an account? 
        <Text style={styles.signIn} onPress={() => toggleSignIn(true)} >
            Sign Up
        </Text>
          </Text>
        </View> 
        </View>
        )}
        </View>
    );
  }
};

const styles = StyleSheet.create({
  input: {
    height: 45,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "50%",
    alignSelf: "center",
    borderColor: "#95A59E",
  },
  loginButton: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#26CF8A",
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: "#95A59E",
    width: "50%",
    alignSelf: "center",
  },
  loginButtonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 20,
  },
  description: {
    fontSize: 10,
    letterSpacing: 4,
    fontFamily: "ArchitectsDaughter_400Regular",
    alignSelf: "center",
    marginBottom: 70,
    color: "#95A59E",
  },
  signInText: {
    fontSize: 18,
    letterSpacing: 4,
    fontFamily: "ArchitectsDaughter_400Regular",
    alignSelf: "center",
    color: "#95A59E",
    marginTop: "2%",
    marginBottom: "2%"
  },
  signIn: {
    fontSize: 18,
    letterSpacing: 4,
    fontFamily: "ArchitectsDaughter_400Regular",
    textTransform: "capitalize",
    textDecorationLine: "underline",
  },
  formContainer: {
    height: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    position: "relative",
    width: "100%"
  },
  buttonContainer: {
   position: "absolute",
   bottom: 0,
  }
});

export default LoginPage;
