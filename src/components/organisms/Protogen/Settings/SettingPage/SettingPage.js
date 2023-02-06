import { Card } from "@rneui/themed";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Pressable, Text, View } from "react-native";
import colors from "../../../../../theme/colors/colors";
import { Divider } from "native-base";
import SettingCard from "../../../../atoms/Card/SettingCard/SettingCard";
function SettingPage() {
  return (
    <>
      <SettingCard  thresh={true}/>
      <SettingCard  btn={true} />
    </>
  );
}

export default SettingPage;
