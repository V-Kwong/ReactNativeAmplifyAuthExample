import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import MainTabNavigator from './MainTabNavigator';


const ParentStack = createStackNavigator();

export default class AppNavigator extends Component {
  render() {
    return (  
      <NavigationContainer>
        <ParentStack.Navigator>
          <ParentStack.Screen name="Splash" component={SplashScreen} />
          <ParentStack.Screen name="Login" component={LoginScreen} />
          <ParentStack.Screen name="Main" component={MainTabNavigator} />
        </ParentStack.Navigator>
      </NavigationContainer>
    );
  }
}