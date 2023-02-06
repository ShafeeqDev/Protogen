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
    container : {
        flex:1,
    },
    subContainer:{
      flexDirection: "row",
      paddingHorizontal: ms(20),
      paddingVertical: ms(10),
      borderRadius: ms(20),
      justifyContent: "space-between",
      alignItems: "center",
    },
    row:{ flexDirection: "row", alignItems: "center"  },
    mainContainer :{paddingHorizontal:ms(10)}
});
export default styles;
