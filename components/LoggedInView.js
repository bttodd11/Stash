import React, { useState, useEffect } from "react";
import {Text, View} from "react-native";

const LoggedInView = (name) => {

   let firstName = name.name;

         return(
         <View>
            <Text>Welcome {firstName} </Text>
         </View>
     )
}

export default LoggedInView