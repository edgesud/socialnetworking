
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import Home from "./Home"
import profile from "./profile"
import Detail from "./Detail"
import editprof from "./editprofile"
import signin from "./signin"
import Forgot from "./forgotpassword"
import Signup from "./signup"
import otp from "./enterotp"
import create from "./createnewpassword"

const Stack = createStackNavigator();



function screennavigator() {
  return (
  
      <Stack.Navigator>
        
        <Stack.Screen  name="login" component={signin} options={{headerShown:false}} />
        <Stack.Screen  name="sud" component={Signup} options={{headerShown:false}} />
        <Stack.Screen  name="forgot" component={Forgot} options={{headerShown:false}} />
        <Stack.Screen  name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen  name="prof" component={profile} options={{headerShown:false}} />
        <Stack.Screen  name="detail" component={Detail} options={{headerShown:false}} />
        <Stack.Screen  name="OTP" component={otp} options={{headerShown:false}} />
        <Stack.Screen  name="password" component={create} options={{headerShown:false}} />
        <Stack.Screen  name="edit" component={editprof} options={{headerShown:false}} />
     
      </Stack.Navigator>
      

 
  );
}
export default screennavigator;