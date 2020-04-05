import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import MainTabNavigator from './MainTabNavigator';


const ParentStack = createStackNavigator();

export default class AppNavigator extends Component {

  state = {
    isLoading: true,
    isLoggedIn: false,
  }

  componentDidMount() {
    this.checkAuth()
  }

  updateAuth = (isLoggedIn) => {
    this.setState({
      isLoggedIn: isLoggedIn
    })
  }

  checkAuth = async () => {
    setTimeout(() => {  
      this.setState({ 
        isLoading: false,
        isLoggedIn: false 
      })
    }, 2500);
    // try {
    //   await AmplifyAuth.currentAuthenticatedUser()
    //   console.log('user is signed in')
    //   this.setState({ currentView: 'mainNav' })
    // } catch (err) {
    //   console.log('user is not signed in')
    //   this.setState({ currentView: 'auth' })
    // }
  }

  render() {
    const { isLoading, isLoggedIn } = this.state

    if (isLoading) {
      return <SplashScreen/>;
    }

    return (  
      <NavigationContainer>
        <ParentStack.Navigator>
          {isLoggedIn ? (
            <ParentStack.Screen name="Main" component={MainTabNavigator} />
          ) : (
            <ParentStack.Screen name="Login" component={LoginScreen} />
          ) }
        </ParentStack.Navigator>
      </NavigationContainer>
    );
  }
}