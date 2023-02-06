import React from "react";
import { View } from "react-native";
import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./Styles";
import colors from "../../../theme/colors/colors";
function Button(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress} >
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          colors={[colors.primaryGradientStart, colors.primaryGradientEnd]}
          style={styles.btn}
        
        >
          <Text style={styles.text}>{props.children}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

export default Button;
