import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';
import {useFonts,BlackOpsOne_400Regular } from '@expo-google-fonts/black-ops-one';
import {ArchitectsDaughter_400Regular } from '@expo-google-fonts/architects-daughter';

const SignIn = () => {

    const [userName, setUserName ] = React.useState("");
    const [password, setPassword ] = React.useState("");
    let [fontsLoaded] = useFonts({
        BlackOpsOne_400Regular,
        ArchitectsDaughter_400Regular
      });


    if (!fontsLoaded) {
        return <AppLoading />;
      } else {
        return (
          <View>
            <Text style={styles.title}>Stash</Text>
            <Text style={styles.description}>Enjoy your privacy !</Text>
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
            <TouchableOpacity
          style={styles.loginButton}
          onPress={() => console.log("Test")}
          underlayColor='#26CF8A'>
          <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.signInText}>Dont have an account? 
          <Text style={styles.signIn} onPress={() => console.log("Pressed")} >
              Sign Up
          </Text>
            </Text>
          </View>
          </View>
        );
      }}


    const styles = StyleSheet.create({
        title: {
            fontSize: 90,
            textAlign: 'center',
            fontFamily: 'BlackOpsOne_400Regular',
            letterSpacing: 10,
            marginBottom: -10,
            marginTop:"15%",
            color: "#95A59E"
        },
        input: {
            height: 45,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            width: '50%',
            alignSelf: "center",
            borderColor:'#95A59E',
        },
        loginButton: {
          marginRight:40,
          marginLeft:40,
          marginTop:"20%",
          paddingTop:10,
          paddingBottom:10,
          backgroundColor:'#26CF8A',
          borderRadius:10,
          borderWidth: 1,
          paddingLeft : 30,
          paddingRight : 30,
          borderColor: "#95A59E"
        },
        loginButtonText: {
          color:'#FFFFFF',
          textAlign:'center',
          fontSize: 20
        },
        description: {
            fontSize: 10,
            letterSpacing: 4,
            fontFamily: 'ArchitectsDaughter_400Regular',
            alignSelf: 'center',
            marginBottom: 70,
            color: "#95A59E"
        },
        signInText: {
          fontSize: 18,
          letterSpacing: 4,
          fontFamily: 'ArchitectsDaughter_400Regular',
          alignSelf: 'center',
          color: "#95A59E",
          marginTop: 10
        },
        signIn: {
          fontSize: 18,
          letterSpacing: 4,
          fontFamily: 'ArchitectsDaughter_400Regular',
          textTransform: 'capitalize',
          textDecorationLine: 'underline'
        },
        formContainer: {
          height: "60%",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
    })


export default SignIn;