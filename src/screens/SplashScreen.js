import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';


export default class SplashScreen extends Component {
  async componentDidMount() {
    setTimeout(() => {  
      this.props.navigation.navigate('Login'); 
    }, 2500);
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});