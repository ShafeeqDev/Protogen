import MonitringCard from "../../../../atoms/Card/MoniteringCard/Card";
import React from "react";
import { Text, View, ScrollView, RefreshControl } from "react-native";
import styles from "./Styles";
import { Card } from "@rneui/base";
import CircularProgressbar from "../../../../molecules/CircularProgressBar/CircularProgress";
import { ms } from "react-native-size-matters";
import OverViewCard from "../../../../atoms/Card/OverViewCard/OverViewCard";
const Monitering = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
         <OverViewCard text={'Genset'} />
        <View style={styles.container1}>
        
          <View style={styles.subContainer}>
            <CircularProgressbar value={'100'} />
            <Text style={styles.text}>Fuel Level</Text>
          </View>

          <View style={styles.subContainer}>
            <CircularProgressbar value={'50'} />
            <Text style={styles.text}>Temperature</Text>
          </View>
        </View>
        <View style={{ flex: 2 }}>
          <View style={styles.cardView}>
            <MonitringCard
              icon={"power-off"}
              headtext={"Genset Status"}
              child={"ON"}
            />
            <MonitringCard
              icon={"store"}
              headtext={"Tank Capacity"}
              child={"100 LTR"}
            />
          </View>
          <View style={styles.cardView}>
            <MonitringCard
              icon={"door-open"}
              headtext={"Door Status"}
              child={"open"}
            />
            <MonitringCard
              icon={"car-battery"}
              headtext={"Genset-Battery"}
              child={"10%"}
            />
          </View>
          <Card containerStyle={{ borderRadius: 10 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: ms(10),
                alignItems:'center'
              }}
            >
              <Text style={styles.text}>Fuel Burn</Text>
              <Text>100 LTR</Text>
            </View>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
};

export default Monitering;
