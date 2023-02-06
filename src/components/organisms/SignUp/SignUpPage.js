import { StatusBar } from "expo-status-bar";
import { Card, Divider } from "native-base";
import React from "react";
import { ImageBackground, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Button from "../../atoms/Button/Button";
import HeaderText from "../../atoms/HeaderText/HeaderText";
import InputField from "../../atoms/InputField/InputField";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./Styles";
import { ScrollView } from "react-native";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BottomSheet from "../../molecules/ActionSheet/BottomSheet";
import { useNavigation } from "@react-navigation/native";
function SignUpPage() {
  const navigation = useNavigation();
  const [show, setShow] = React.useState(false);
  return (
    <SafeAreaView>
      <StatusBar style="light" />
      {/* <KeyboardAwareScrollView> */}
        <ImageBackground
          source={require("../../../../assets/images/SignUpBG.png")}
          style={{ height: hp("100%") }}
          resizeMode="cover"
        >
          <View style={styles.mainContainer}>
            <View style={styles.container1}>
              <View
                style={{
                  width: wp("15%"),
                  height: hp("8%"),
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: hp("1.5%"),
                }}
              >
                <MaterialIcons
                onPress={()=>navigation.goBack()}
                  name={"arrow-back-ios"}
                  style={{ color: "black" }}
                  size={wp("8%")}
                />
              </View>
              <HeaderText>Register </HeaderText>
            </View>
            <ScrollView style={styles.container2}>
              <InputField icon={"person"} placeholder={"Name"} />
              <InputField icon={"attach-email"} placeholder={"Email"} />
              <InputField
                type={show ? "text" : "password"}
                icon={"lock"}
                icon2={show ? "visibility" : "visibility-off"}
                placeholder={"Password"}
                onPress={() => setShow(!show)}
              />
              <InputField
                type={show ? "text" : "password"}
                icon={"lock"}
                icon2={show ? "visibility" : "visibility-off"}
                placeholder={"Confirm Password"}
                onPress={() => setShow(!show)}
              />
              {/* <BottomSheet/> */}
              <InputField
                icon={"phone"}
                placeholder={"Phone NO (03XX-XXXXXXX)"}
              />

            
              <InputField icon={"add-to-home-screen"} placeholder={"Address"} />
              <InputField icon={"developer-board"} placeholder={"Board-ID"} />
              <InputField icon={"devices"} placeholder={"Device Name"} />
              <Button>Register</Button>
            </ScrollView>
          </View>
        </ImageBackground>
      {/* </KeyboardAwareScrollView> */}
      
    </SafeAreaView>
  );
}

export default SignUpPage;
