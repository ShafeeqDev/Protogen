import React, { Children } from 'react'
import { TouchableOpacity } from 'react-native'
import { View , Text } from 'react-native-animatable'
import colors from '../../../theme/colors/colors'
import styles from './Styles'

function FAQButton(props) {
  return (
<View style={styles.container}>
    <TouchableOpacity>
    <Text style={[styles.Text,{fontWeight:'bold',color:colors.black}]}>
        {   
            props.children
        }
    </Text>
    </TouchableOpacity>

</View>
  )
}

export default FAQButton