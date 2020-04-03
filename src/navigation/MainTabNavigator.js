import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';


const BottomTabNavigatorConfig = {
  tabBarOptions: {
    showLabel: false, // hide labels
    activeTintColor: '#ffe001', // active icon color
    style: {
      backgroundColor: '#313131', // TabBar background
    }
  }
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

// HomeStack.navigationOptions = {
//   tabBarIcon: ({ focused }) => (
//     <EntypoIcon
//       focused={focused}
//       name='home'
//     />
//   ),
// };

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

// SettingsStack.navigationOptions = {
//   tabBarIcon: ({ focused }) => (
//     <IoniconsIcon
//       focused={focused}
//       name='md-settings'
//     />
//   ),
// };

export default createBottomTabNavigator({
  HomeStack,
  SettingsStack,
}, BottomTabNavigatorConfig);
