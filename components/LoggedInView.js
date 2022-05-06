import React, { useState, useEffect } from "react";
import {Text, View} from "react-native";


const LoggedInView = (name) => {

         return(
         <View>
            <Text>Welcome {name.name} </Text>
         </View>
     )
}

export default LoggedInView