import React from "react";
import { Pressable } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ms } from "react-native-size-matters";
import { Touchable } from "react-native";
import { TouchableOpacity, Text } from "react-native";
import colors from "../../../theme/colors/colors";
function TabButton(props) {
  return (
    <Pressable
      style={{
        justifyContent: "center",
        alignItems: "center",
        width:props.width,
        height: hp("5%"),
        backgroundColor:  props.backgroundColor
      }}
      onPress={props.onPress}
    >
      <Text style={{ fontSize: wp('4%'), fontWeight: "bold" }}>
        {props.children}
      </Text>
    </Pressable>
  );
}

export default TabButton;
