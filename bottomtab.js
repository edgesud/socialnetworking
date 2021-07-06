import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from "./Home"
import profile from "./profile"
import Detail from "./Detail"

import signin from "./signin"
import Forgot from "./forgotpassword"
import Signup from "./signup"
import otp from "./enterotp"
import create from "./createnewpassword"

const Tab = createMaterialBottomTabNavigator();


function BottomTab() {
return(
    <Tab.Navigator initialRouteName="Feed" activeColor="#e91e63"  barStyle={{ backgroundColor: 'tomato' }}
    >
<Tab.Screen
        name="Feed"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
<Tab.Screen
        name="Profile"
        component={profile}
        options={{
          tabBarLabel: 'updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
</Tab.Navigator>
);
}
export default BottomTab;