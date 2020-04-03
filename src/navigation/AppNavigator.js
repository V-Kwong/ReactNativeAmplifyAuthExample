import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import MainTabNavigator from './MainTabNavigator';


// const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator({
  Splash: SplashScreen,
  Login: LoginScreen,
  Main: MainTabNavigator,
}, {
  initialRouteName: 'Splash',
}));