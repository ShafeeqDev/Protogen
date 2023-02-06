import React from "react";
import { Text, View, ScrollView, RefreshControl } from "react-native";
import { Card } from "@rneui/base";
import { ms } from "react-native-size-matters";
import colors from "../../../../theme/colors/colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
function OverViewCard(props) {
  return (
    <Card containerStyle={{ borderRadius: ms(10), paddingVertical: ms(0),margin:0 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          
        }}
      >
        {
          props.icon===null || props.icon === undefined ? null :    <View
          style={{
            height: ms(40),
            width: ms(40),
            borderRadius: ms(30),
            backgroundColor: colors.primary,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome5
            name={props.icon}
            color={colors.secondary}
            size={ms(20)}
          />
        </View>
        }
    
        <Text style={{ fontWeight: "bold",fontSize:ms(16) }}>{props.text}</Text>

        <View
          style={{
            alignItems: "center",
          }}
        >
          <Entypo name={"dot-single"} color={colors.green} size={ms(50)} />
        </View>
      </View>
    </Card>
  );
}

export default OverViewCard;
