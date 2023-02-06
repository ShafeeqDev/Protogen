import { Container } from "native-base";
import { StyleSheet } from "react-native";
import colors from "../../../theme/colors/colors";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { horizontalScale as hs, verticalScale as vs, moderateScale as ms } from '../../../theme/Dimensions/Dimensions'

const styles = StyleSheet.create({
  mainContainer: { flex: 1, padding: hp('2.5%'), },
  container1: {
    flex: 1 / 8,
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingRight:wp('3%')
   
  },
  container2: { flex: 2},
});
export default styles;
