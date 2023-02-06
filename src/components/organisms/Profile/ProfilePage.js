
import { Divider } from 'native-base';
import React from 'react'
import { Image, ImageBackground,View , StatusBar} from 'react-native'

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import colors from "../../../theme/colors/colors";
import {
  horizontalScale as hs,
  verticalScale as vs,
  moderateScale as ms,
} from "../../../theme/Dimensions/Dimensions";
import IconTextButton from '../../atoms/IconTextBtn/IconTextButton';
const bgImage = require("../../../../assets/images/ProfileBackGround.png")
const image = require("../../../../assets/images/Profile.jpg")
function ProfilePage() {
  return (
   <>
   <View style={{flex:1, backgroundColor:colors.background}}>
    <ImageBackground source={bgImage}
      style={{height:hp('30%'),width:wp('100%')}}
    
    >
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <View style={{marginTop:hp('5%')}}>

        </View>
      <Image  
      source={image} 
      style={{
        borderRadius: wp("100%"),
        height: ms(100),
        width: ms(100),
      }}
     />
      </View>
    </ImageBackground>
    <View style={{flex:1, padding:25 , }}>
    <Divider />
    <IconTextButton  icon  ={'email'}>Shafiq.dev@rubitron.org</IconTextButton>
    <Divider/>
    <IconTextButton icon ={'facebook'}>Sync & Secure</IconTextButton>
    <Divider/>
    <IconTextButton icon ={'messenger'}>Sync & Secure</IconTextButton>
    <Divider/>
    <IconTextButton icon ={'lock'}>Change Password</IconTextButton>
    <Divider/>
    <IconTextButton icon ={'supervisor-account'}>Delete Account</IconTextButton>
    <Divider/>
    </View>
   </View>
   </>
  )
}

export default ProfilePage