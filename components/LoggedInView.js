import React, { useState, useEffect } from "react";
import {Text, View} from "react-native";


const LoggedInView = (name) => {

    console.log(name.name.displayName)
     return(
         <View>
            <Text>Welcome {name.name.displayName} </Text>
         </View>
     )
}

export default LoggedInView