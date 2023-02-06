import React from 'react';
import { View, Text} from 'react-native';
import styles from './Styles'
function Items(props) {
  return (
    <View
      // key={item.id}
      style={styles.itemThreeContainer}
    >
      <View style={styles.itemThreeSubContainer}>
        <View style={styles.itemThreeContent}>
          <View>
            <Text style={styles.itemThreeSubtitle} numberOfLines={2}>
              {props.message}
            </Text>
            <Text style={styles.itemThreeSubtitle} numberOfLines={1}>
              {props.date}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Items