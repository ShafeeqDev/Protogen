import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { horizontalScale as hs, verticalScale as vs, moderateScale as ms } from '../../../theme/Dimensions/Dimensions'

const styles = StyleSheet.create({
  input: {
    height:hp('6.0%'),
    fontSize: ms(15)
  },
  container: {
  paddingVertical: hp('0.8%')
  }
})
export default styles;