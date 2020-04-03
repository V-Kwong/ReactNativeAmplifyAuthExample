/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';

export default class App extends Component {
  render() {
    return (  
      <View style={styles.container}>
        <StatusBar barStyle='light-content' backgroundColor='rgba(0, 0, 0, 0)' translucent/>
        <AppNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
