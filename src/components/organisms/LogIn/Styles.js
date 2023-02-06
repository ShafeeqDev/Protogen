import { Container } from "native-base";
import { StyleSheet } from "react-native";
import colors from "../../../theme/colors/colors";

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
const styles = StyleSheet.create({
    mainContainer:{ flex: 1, padding: hp('2%') },
    container1:{
        flex:1
    },
    container2:{ flex: 2 },
    forgetbtn:{ flexDirection: "row", justifyContent: "flex-end" },
    dividerView:{
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    btntextcolor:{ color: colors.primary },
    viewAlign:{ justifyContent: "center", alignItems: "center" }
})
export default styles;