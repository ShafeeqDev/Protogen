import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  horizontalScale as hs,
  verticalScale as vs,
  moderateScale as ms,
} from "../../../theme/Dimensions/Dimensions";

const styles = StyleSheet.create({
  btn: {
    height: hp("5.5%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: hp("4%"),
  },
  container:{paddingVertical:hp('2.5%')},
  text: {
    color:"black",
    fontSize: ms(20),
    fontWeight:'bold',
   
  },
});
export default styles;
