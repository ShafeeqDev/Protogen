import React from "react";
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { CurvedBottomBar } from "react-native-curved-bottom-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import Monitering from "../components/organisms/Protogen/Home/Monitering/Monitering";
import colors from "../theme/colors/colors";
import OverView from "../screens/Protogen/Home/Home";
import { ms } from "react-native-size-matters";
import Home from "../screens/Protogen/Home/Home";
import Setting from "../screens/Protogen/Setting/Setting";
import Charts from "../screens/Protogen/Charts/Charts";
import Alerts from "../screens/Protogen/Alerts/Alerts";
function BottomNavigationProtogen() {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = "";

    switch (routeName) {
      case "title1":
        icon = "ios-home-outline";
        break;
      case "title2":
        icon = "settings-outline";
        break;
        case "title3":
          icon = "bar-chart";
          break;
        case "title4":
          icon = "alert-circle-outline";
          break;
    }

    return (
      <Ionicons
        name={icon}
        size={ms(25)}
        color={routeName === selectedTab ? "black" : "gray"}
      />
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <CurvedBottomBar.Navigator
        style={styles.bottomBar}
        strokeWidth={ms(0.5)}
        strokeColor="#DDDDDD"
        height={ms(55)}
        circleWidth={ms(55)}
        bgColor={colors.primary}
        // initialRouteName="title1"
        borderTopLeftRight
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View style={styles.btnCircle}>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
              }}
              onPress={() => Alert.alert("Click Action")}
            >
              <Ionicons name={"apps-sharp"} color={colors.primary} size={ms(25)} />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        <CurvedBottomBar.Screen
          name="title1"
          position="LEFT"
          options={{ headerShown: false }}
          component={Home}
        />
        <CurvedBottomBar.Screen
          name="title2"
          position="LEFT"
          options={{ headerShown: false }}
          component={Setting}
        />
          <CurvedBottomBar.Screen
          name="title3"
          position="RIGHT"
          options={{ headerShown: false }}
          component={Charts}
        />
          <CurvedBottomBar.Screen
          name="title4"
          position="RIGHT"
          options={{ headerShown: false }}
          component={Alerts}
        />
      </CurvedBottomBar.Navigator>
    </View>
  );
}

export default BottomNavigationProtogen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: ms(20),
  },
  button: {
    marginVertical: ms(5),
  },
  bottomBar: {},
  btnCircle: {
    width: ms(60),
    height: ms(60),
    borderRadius: ms(35),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.secondary,
    padding: ms(10),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: ms(0.5),
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: ms(30),
  },
  imgCircle: {
    width: ms(30),
    height: ms(30),
    tintColor: "gray",
  },
  img: {
    width: ms(30),
    height: ms(30),
  },
});
