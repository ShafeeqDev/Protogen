import { StyleSheet } from "react-native";
import colors from "../../../../../theme/colors/colors";
const styles = StyleSheet.create({
    itemThreeContainer: {
      padding: 10,
      borderRadius: 10,
      shadowColor: colors.background,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginVertical: 8,
      marginHorizontal: 8,
      backgroundColor: colors.primary,
    },
    itemThreeSubContainer: {
      flexDirection: 'row',
      paddingVertical: 3,
    },
    itemThreeContent: {
      flex: 1,
      paddingLeft: 15,
      justifyContent: 'space-between',
    },
    itemThreeSubtitle: {
    //   fontFamily: fonts.primaryRegular,
      fontSize: 13,
      color: colors.secondary,
    },
  });
  export default styles;