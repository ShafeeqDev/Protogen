import CircularProgress from "react-native-circular-progress-indicator";
import { Avatar, Card } from "@rneui/base";
import React, { memo, useCallback, useRef, useState } from "react";
import {
  Button,
  Dimensions,
  Text,
  View,
  Platform,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import colors from "../../../../theme/colors/colors";
import {
  horizontalScale as hs,
  verticalScale as vs,
  moderateScale as ms,
} from "../../../../theme/Dimensions/Dimensions";
const styles = StyleSheet.create({
  card: {
    height: hp("17%"),
    width: wp("45%"),
    margin: hp("0.9%"),
    borderRadius: ms(20),
    justifyContent: "center",
    alignItems: "center",
  },
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  avatar: {
    justifyContent: "center",
    backgroundColor: colors.primary,
    alignItems: "center",
    width: ms(45),
    height: ms(45),
    borderRadius: ms(100),
  },
  textView: {
    flex: 1,
    paddingVertical: hp("1%"),

    width: wp("35%"),
    justifyContent: "center",
    alignItems: "center",
  },
  textB: { fontSize: ms(17), fontWeight: "bold" },
  text: { fontSize: ms(15) },
});
export default styles;
