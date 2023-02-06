import React from 'react'
import { MaterialIcons } from "@expo/vector-icons";
function NotificationIcon(colors) {
  return (
    <MaterialIcons
    name={'notifications'}
    style={{ color:colors.secondray,paddingRight:20}}
    size={25}   
  />)
}

export default NotificationIcon