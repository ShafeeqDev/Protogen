import { StatusBar } from "expo-status-bar";
import { Divider } from "native-base";
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
import TextButton from "../../atoms/TextBtn/TextButton";
import FAQButton from "../../atoms/TextBtn/FAQBtn";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";

function LogInPage() {
  const navigation = useNavigation();
  console.log("navigation", navigation);
  const [show, setShow] = React.useState(false);
  return (
    <SafeAreaView>
      {/* <StatusBar /> */}
      <ImageBackground
        source={require("../../../../assets/images/BackGroundImage.png")}
        style={{ height: hp("100%") }}
        resizeMode="cover"
      >
        <View style={styles.mainContainer}>
          <View style={styles.container1}></View>
          <View style={styles.container2}>
            <HeaderText>LogIn</HeaderText>
            <InputField icon={"person"} placeholder={"Email"} />
            <InputField
              type={show ? "text" : "password"}
              icon={"lock"}
              icon2={show ? "visibility" : "visibility-off"}
              placeholder={"Password"}
              onPress={() => setShow(!show)}
            />
            <View style={styles.forgetbtn}>
              <TextButton>Forget Password ?</TextButton>
            </View>
            <Button onPress={() => navigation.navigate("DrawerContent")}>
              LogIn
            </Button>
            <View style={styles.dividerView}>
              <Divider width={wp("30%")} />
              <Text style={styles.btntextcolor}> OR </Text>
              <Divider width={wp("30%")} />
            </View>
            <View style={styles.viewAlign}>
              <TextButton onPress={() => navigation.navigate("SignUp")}>
                New User (Register Here)
              </TextButton>
            </View>
          </View>
          <View
            style={[
              styles.container1,
              { justifyContent: "flex-end", alignItems: "center" },
            ]}
          >
            <FAQButton>FAQ & Operation Guide</FAQButton>
            <Divider width={wp("60%")} />
            <Text>Powered by Sync & Secure</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default LogInPage;
