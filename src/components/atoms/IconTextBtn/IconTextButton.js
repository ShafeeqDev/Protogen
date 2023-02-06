import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native";
import {
  View,
  Text,
} from "react-native";
import colors from "../../../theme/colors/colors";
import {
  horizontalScale as hs,
  verticalScale as vs,
  moderateScale as ms,
} from "../../../theme/Dimensions/Dimensions";
import { MaterialIcons } from "@expo/vector-icons";
function IconTextButton(props) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center",paddingVertical:hp('1%') }}>
    <MaterialIcons name={props.icon} color={colors.secondary} size={ms(18)} />
    <TouchableOpacity
      style={{ paddingStart: wp("4%"), padding: 4 }}
      onPress={props.onPress}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: ms(15),
          color: colors.secondary,
        }}
      >
     {
        props.children
     }
      </Text>
    </TouchableOpacity>
  </View>
  )
}

export default IconTextButton