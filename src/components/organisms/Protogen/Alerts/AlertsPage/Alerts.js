import React, { useEffect, useState } from 'react';
import { View, Text, FlatList,ActivityIndicator ,StyleSheet} from 'react-native';
import colors from '../../../../../theme/colors/colors';
import Items from './Items';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from "react-native-responsive-screen";
function AlertsPage(props) {
  return (
    <View style={styles.container}>
  {/* {AlertLoading ? (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <ActivityIndicator size={15} color={colors.primary} />
    </View>
  ) : ( */}
    <View style={{ flex: 1 }}>
      
      {/* {alert !== undefined  && alert.length > 0 ? ( */}
        <FlatList
          data={alert}
          renderItem={({ item }) => (
            <Items date={'hardware not connected'} message={'dfjalfj;aldkfa'} />
            )}
          keyExtractor={(item, index) => index.toString()}
        />
        {/* ) : (
          <View
            style={{
                flex: 0.9,
                alignItems: 'center',
                justifyContent: 'center',
              }}
          >
            <Text style={styles.Text}>NO RECENT ALERTS!</Text>
          </View>
          )} */}
    </View>
    {/* )} */}
</View>
  )
}

export default AlertsPage
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    btnText: { fontSize: hp('2%'), fontWeight: 'bold', color: '#fff' },
  
    Image: { width: wp('50%'), height: hp('60%') },
  
    Dropdown: {
      width: wp('80%'),
      height: hp('4%'),
      alignSelf: 'center',
      marginTop: hp('1.5%'),
    },
    Text: { color: colors.gray, fontWeight: 'bold', fontSize: hp('2%') },
  });
  