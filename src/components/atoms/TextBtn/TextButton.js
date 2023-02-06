import React, { Children } from 'react'
import { TouchableOpacity } from 'react-native'
import { View , Text } from 'react-native-animatable'
import styles from './Styles'

function TextButton(props) {
  return (
<View style={styles.container}>
    <TouchableOpacity onPress={props.onPress}>
    <Text style={[styles.Text,{fontWeight:'bold'}]}>
        {   
            props.children
        }
    </Text>
    </TouchableOpacity>

</View>
  )
}

export default TextButton