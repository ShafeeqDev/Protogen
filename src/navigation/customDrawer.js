import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native";
import { View, ImageBackground, Text, Image, StyleSheet } from "react-native";
import colors from "../theme/colors/colors";
import {
  horizontalScale as hs,
  verticalScale as vs,
  moderateScale as ms,
} from "../theme/Dimensions/Dimensions";
import { Divider } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import IconTextButton from "../components/atoms/IconTextBtn/IconTextButton";
const bgImage = require("../../assets/images/ProfileBackGround.png")
const image = require("../../assets/images/Profile.jpg")
// import AsyncStorage from "@react-native-community/async-storage";
// import { logout } from "../store/Action/authActions";
const CustomDrawerContent = (props) => {
  // console.log("NAvigation",props.navigation)
  // };
  // const handleLogout = () => {
  //   Alert.alert(
  //     "Sign Out",
  //     "Do you want to sign out?",
  //     [
  //       {
  //         text: "Cancel",
  //         onPress: () => console.log("Cancel Pressed"),
  //         style: "cancel",
  //       },
  //       {
  //         text: "OK",
  //         onPress: () => {
  //           AsyncStorage.removeItem("userToken");
  //           console.log(
  //             "+++++++++++LOCAl Storage ",
  //             AsyncStorage.removeItem("userToken")
  //           );
  //           logout();
  //           props.navigation.navigate("Auth");
  //         },
  //       },
  //     ],
  //     { cancelable: false }
  //   );
  // };
  return (
    <View style={styles.mainContainer}>
      <View>
        <ImageBackground
          source={bgImage}
          style={styles.bgImage}
        >
          <View>
            <Image
              source={image}
              // borderRadius style will help us make the Round Shape Image
              style={styles.image}
            />
          </View>
        </ImageBackground>

      </View>
      <DrawerContentScrollView style={{ padding: ms(2) }} {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Divider />
      <View style={styles.scrollView}>
        <IconTextButton icon={"help"}>FAQ's & Operation Guide</IconTextButton>
        <IconTextButton icon={"logout"}>LogOut</IconTextButton>
      </View>
    </View>
  );
};
export default CustomDrawerContent;

const styles = StyleSheet.create({
  mainContainer: { flex: 1,backgroundColor:colors.background  },
  bgImage: {
    height: hp("30%"),
    justifyContent: "center",
    padding: ms(20),
    // alignItems:'center'
  },
  image: {
    borderRadius: wp("100%"),
    height: ms(100),
    width: ms(100),
  },
  scrollView: { padding: hp("2%") },
});
