import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Auth, Hub } from 'aws-amplify';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import MainTabNavigator from './MainTabNavigator';


const ParentStack = createStackNavigator();

export default class AppNavigator extends Component {

  state = {
    user: null,
    isLoading: true,
    isLoggedIn: false,
  }

  componentDidMount() {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      console.log(event)
      console.log(data)
      switch (event) {
        case "signIn":
          this.signedIn(data)
          break;
        case "signOut":
          this.signedOut()
          break;
        case "customOAuthState":
          console.log("customOAuthState???")
      }
    });

    Auth.currentAuthenticatedUser()
      .then(user => this.signedIn(user))
      .catch(() => this.signedOut());
  }

  signedIn(user) {
    this.setState({ 
      user: user,
      isLoading: false,
      isLoggedIn: true,
    })
    console.log("signed in baby")
    console.log(user)
  }

  signedOut() {
    this.setState({ 
      user: null,
      isLoading: false,
      isLoggedIn: false,
    })
    console.log("signed out bro")
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