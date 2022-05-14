import React from "react";
import {Text, View, StyleSheet} from "react-native";
import { useFonts, BlackOpsOne_400Regular } from "@expo-google-fonts/black-ops-one";
import { ArchitectsDaughter_400Regular } from "@expo-google-fonts/architects-daughter";

const LoggedInView = (name) => {

   let firstName = name.name;
   let [fontsLoaded] = useFonts({
      BlackOpsOne_400Regular,
      ArchitectsDaughter_400Regular,
    });

         return(
         <View>
            <Text style={styles.welcomeText}>Welcome {firstName} </Text>
         </View>
     )
}

const styles = StyleSheet.create({
   welcomeText: {
      fontSize: 28,
      marginLeft: 10,
      fontFamily: "ArchitectsDaughter_400Regular",
      color: "#95A59E",
   }

})

export default LoggedInView