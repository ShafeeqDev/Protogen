import React from 'react'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native'
import SettingCard from '../../../../atoms/Card/SettingCard/SettingCard'

function MaintanancePage() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
  <SafeAreaView style={{ }} >
  <ScrollView  style={{height:'82%'}} >
  <SettingCard/>
  <SettingCard/>
  <SettingCard/>
  <SettingCard/>
  <SettingCard/>
  <SettingCard/>
  </ScrollView>
 
  </SafeAreaView>
  )
}

export default MaintanancePage