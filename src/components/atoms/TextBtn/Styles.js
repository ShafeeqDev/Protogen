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
  Text: {
    fontSize: ms(15),
    color: colors.primary,
  },
  container: {
    paddingTop: hp("1%"),
    paddingRight:wp('2%'),
    justifyContent: "center",
  },
});
export default styles;
