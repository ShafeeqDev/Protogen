import { View } from "native-base";
import { Text } from "react-native";
import React from "react";
import DropDown from "../../../components/atoms/SearchableDropDon/DropDown";
import Monitering from "../../../components/organisms/Protogen/Home/Monitering/Monitering";
import colors from "../../../theme/colors/colors";
import styles from "./Styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import TabButton from "../../../components/atoms/TabBtn/TabButton";
import { ms } from "react-native-size-matters";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import OverViewCard from "../../../components/atoms/Card/OverViewCard/OverViewCard";
import SettingPage from "../../../components/organisms/Protogen/Settings/SettingPage/SettingPage";
import MaintanancePage from "../../../components/organisms/Protogen/Settings/MaintanancePage/MaintanancePage";
function Setting() {
  const [tab, setTab] = React.useState(false);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.row}>
            <TabButton
              onPress={() => setTab(false)}
              children={"Settting"}
              tab={tab}
              width={tab === false ? wp("30%") : wp("23%")}
              backgroundColor={tab === false ? colors.primary : "white"}
            />
            <TabButton
              onPress={() => setTab(true)}
              children={"Mantainance"}
              tab={tab}
              width={tab === true ? wp("35%") : wp("30%")}
              backgroundColor={tab === true ? colors.primary : "white"}
            />
          </View>
          <View style={styles.row}>
            <Text style={{ fontSize: ms(17), fontWeight: "bold" }}>100% </Text>
            <Ionicons name="battery-charging" size={ms(30)} />
          </View>
        </View>
        <View style={styles.mainContainer}>
          <OverViewCard text={"Genset"} />
          {tab ? <MaintanancePage /> : <SettingPage />}
        </View>
      </View>
    </>
  );
}

export default Setting;
