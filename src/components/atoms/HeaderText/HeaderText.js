import React from "react";
import { View, Text } from "react-native";
import styles from "./Styles";

function HeaderText(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
}

export default HeaderText;
