import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from "./screen/stacknavigator";
import BottomNavigator from "./screen/bottomtab"
export default class app extends Component{
  
  render(){

    return(
    <NavigationContainer>
        <StackNavigator/>
        
    </NavigationContainer>
    )
  }
}

