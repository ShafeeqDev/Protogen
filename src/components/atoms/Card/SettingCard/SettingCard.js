import { Card } from "@rneui/themed";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Pressable, Text, View } from "react-native";
import colors from "../../../../theme/colors/colors";
import { Divider } from "native-base";
import styles from "./styles";
import BottomSheet from "../../../molecules/ActionSheet/BottomSheet";
function SettingCard(props) {
  return (
    <Card containerStyle={styles.card}>
      <View>
        <View style={styles.cardTitleView}>
          <Text style={styles.cardTitle}>Tank Capacity</Text>
        </View>
        <Divider />
        <View style={styles.container}>
          {props.thresh === true ? (
            <>
              <Text style={styles.text}>1000 Liter</Text>
              <View style={{width:200}}>
              <BottomSheet/>
              </View>
           
            
              
            </>
          ) : props.btn === true ? (
            <View style={{ flexDirection: "row" }}>
              <Pressable style={{ backgroundColor: colors.primary }}>
                <Text style={{ paddingHorizontal: 10, fontWeight: "bold" }}>
                  ARM
                </Text>
              </Pressable>
              <Pressable>
                <Text style={{ paddingHorizontal: 10, fontWeight: "bold" }}>
                  DISARM
                </Text>
              </Pressable>
            </View>
          ) : (
            <Text style={styles.text}>1000 Liter</Text>
          )}

          <View style={styles.avatar}></View>
        </View>
      </View>
    </Card>
  );
}

export default SettingCard;
