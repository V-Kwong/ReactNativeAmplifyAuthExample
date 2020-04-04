import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';


const MainTab = createBottomTabNavigator();
// const SettingsStack = createStackNavigator();
// const HomeStack = createStackNavigator();

export default class MainTabNavigator extends Component {
  render() {
    return (
      <MainTab.Navigator>
        <MainTab.Screen name="Home"  component={HomeScreen} />
        <MainTab.Screen name="Settings" component={SettingsScreen} />
      </MainTab.Navigator>
    )
  }
}
