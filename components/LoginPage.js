import React, { useState, useEffect } from "react";
import { Alert, Text, View, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, BlackOpsOne_400Regular } from "@expo-google-fonts/black-ops-one";
import { ArchitectsDaughter_400Regular } from "@expo-google-fonts/architects-daughter";
import auth from "@react-native-firebase/auth";

const LoginPage = (props) => {
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [signIn, toggleSignIn] = React.useState(true);
  const [initializing, setInitializing] = useState(true);
  let credentials;

  let [fontsLoaded] = useFonts({ BlackOpsOne_400Regular, ArchitectsDaughter_400Regular});

  let onAuthStateChanged = () => {
    if (initializing) setInitializing(false);
  };

  const emailExist = () => {
    Alert.alert(
      "Please Choose New Email",
      "Email Already Exist",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        }
      ]
    )
  }

  const userNotFound = () => {
    // Clearing the username and password
    setEmail("");
    setPassword("");

    Alert.alert(
      "User Not Found",
      "Please try again",
      [
        {
          text: "Cancel",
          style: "cancel"
        }
      ]
    )
  }

  const wrongPassword = () => {
    setPassword("")

    Alert.alert(
      "Wrong Password",
      "Please try again",
      [
        {
          text: "Cancel",
          style: "cancel"
        }
      ]
    )
  }

  const emptyField = () => {
    Alert.alert(
      "Empty Field",
      "Please fill in all fields",
      [
        {
          text: "Cancel",
          style: "cancel"
        }
      ]
    )
  }

  const invalidEmail = () => {
    Alert.alert(
      "Error",
      "Please enter a valid email",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        }
      ]
    )
  }

  let handleToggle =  () => {

    // Restarting all the variables
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
    
    // Toggle Sign-in views
    if(signIn){
      toggleSignIn(false)
    }
    else {
      toggleSignIn(true)
    }
  }

  let handleAuthentication = (state) => {

    let fbConsole = auth;

    // For some reason I could not link all of these on the same
    // line so I have to define them individually
    if(firstName == undefined){
      emptyField()
      return;
    }
    if(lastName === undefined){
      emptyField()
      return;
    }
    if(email === undefined){
      emptyField()
      return;
    }
    if(password === undefined){
      emptyField()
      return;
    }

    if (state === false) {
      fbConsole().signInWithEmailAndPassword(email, password).then((user) => {
        props.setUserInfo(user.user.displayName)
        props.setUserLoggedIn(true);
      }).catch((error) => {
        console.log(error)
        if (error.code === "auth/user-not-found") {
          userNotFound();
        }
        if (error.code === "auth/wrong-password"){
          wrongPassword()
        }
      }
      )
    }

    if (state == true) {
      fbConsole().createUserWithEmailAndPassword(email, password).then((userCredentials) => {
         credentials = userCredentials
        }).then(() => {
          credentials.user.updateProfile({
            displayName: firstName,
          })
        }).then(() => {
          props.setUserInfo(firstName)
          props.setUserLoggedIn(true);
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            emailExist();
          }
          if (error.code === "auth/invalid-email") {
            invalidEmail();
          }
        })
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        {signIn ? (
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              onChangeText={(firstName) => setFirstName(firstName)}
              value={firstName}
              placeholder={"First Name"}
            />
            <TextInput
              style={styles.input}
              onChangeText={(lastName) => setLastName(lastName)}
              value={lastName}
              placeholder={"Last Name"}
            />
            <TextInput
              style={styles.input}
              onChangeText={(email) => setEmail(email)}
              value={email}
              placeholder={"Email"}
            />
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
              value={password}
              placeholder={"Password"}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => handleAuthentication(signIn)}
                underlayColor="#26CF8A"
              >
                <Text style={styles.loginButtonText}>Sign Up</Text>
              </TouchableOpacity>
              <Text style={styles.signInText}>
                Have an account?
                <Text style={styles.signIn} onPress={() => handleToggle(false)}>
                  Sign In
                </Text>
              </Text>
            </View>
          </View>
        ) : (
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              onChangeText={(email) => setEmail(email)}
              value={email}
              placeholder={"Email"}
            />
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
              value={password}
              placeholder={"Password"}
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => handleAuthentication(signIn)}
                underlayColor="#26CF8A"
              >
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>
              <Text style={styles.signInText}>
                Dont have an account?
                <Text style={styles.signIn} onPress={() => handleToggle(signIn)}>
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
    marginBottom: "2%",
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
    width: "100%",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
  },
});

export default LoginPage;
