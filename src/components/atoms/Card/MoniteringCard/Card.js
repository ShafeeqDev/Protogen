import CircularProgress from "react-native-circular-progress-indicator";
import { Avatar, Card } from "@rneui/base";
import React, { memo, useCallback, useRef, useState } from "react";
import { Button, Dimensions, Text, View, Platform } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import colors from "../../../../theme/colors/colors";
import { MaterialIcons } from "@expo/vector-icons";
import {
  horizontalScale as hs,
  verticalScale as vs,
  moderateScale as ms,
} from "../../../../theme/Dimensions/Dimensions";
import styles from "./Styles";
function MonitringCard(props) {
  return (
    <Card containerStyle={styles.card}>
      <View style={styles.container}>
        <View
          style={styles.avatar}
        >
    
          <FontAwesome5
            name={props.icon}
            color={colors.secondary}
            size={ms(20)}
          />
        </View>
        <View
          style={styles.textView}
        >
          <Text style={styles.textB}>{props.headtext}</Text>
          <Text style={styles.text}>{props.child}</Text>
        </View>
      </View>
    </Card>
  );
}

export default MonitringCard;
