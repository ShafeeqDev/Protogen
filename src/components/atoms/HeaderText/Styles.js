import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "../../../theme/colors/colors";
import {
  horizontalScale as hs,
  verticalScale as vs,
  moderateScale as ms,
} from "../../../theme/Dimensions/Dimensions";
const styles = StyleSheet.create({
  text: {
    color: colors.primary,
    fontSize: ms(45),
    fontWeight: "bold",
  },
  container: {
    paddingVertical: hp("1%"),
    justifyContent: "center",
    alignItems: "center",
  },
});
export default styles;
