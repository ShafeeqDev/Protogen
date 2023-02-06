import React from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import colors from "../../../theme/colors/colors";
import { ms } from "react-native-size-matters";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
function CircularProgressbar(props) {
  return (
    <CircularProgress
      value={props.value}
      // title={}
      titleColor={"#ffff"}
      titleStyle={{ fontSize: ms(17), fontWeight: "bold" }}
      valueSuffix={"%"}
      activeStrokeColor={colors.primary}
      // activeStrokeSecondaryColor={"#a50606"}
      inActiveStrokeColor={"#ffff"}
      inActiveStrokeOpacity={0.8}
      activeStrokeWidth={10}
      radius={wp("17%")}
      progressValueColor={"black"}
    />
  );
}

export default CircularProgressbar;
