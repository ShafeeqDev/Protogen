import { StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import {
  horizontalScale as hs,
  verticalScale as vs,
  moderateScale as ms,
} from "../../../../../theme/Dimensions/Dimensions";

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardView: {
    flex: 1,
    // borderWidth: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container1: {
    flex: 1,
    paddingVertical: hp("1%"),
    // borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  subContainer: { justifyContent: "center", alignItems: "center" },
  text: { fontSize: ms(15), fontWeight: "bold" },
});
export default styles;
