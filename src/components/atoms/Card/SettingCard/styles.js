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
const styles = StyleSheet.create({
    card:{ marginHorizontal: 0, borderRadius: 10 },
    cardTitleView:{ paddingVertical: 5 },
    cardTitle:{ fontWeight: "bold", fontSize: 16 },
    container:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
      },
      text:{ color: colors.secondaryLight,fontSize:16},
      avatar:
        {
            borderRadius: 50,
            width: 40,
            height: 40,
            backgroundColor: colors.primary,
          }
      

});
export default styles;
