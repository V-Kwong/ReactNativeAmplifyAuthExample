import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';


export default class LoginScreen extends Component {
  render() {
    return (
        <View style={styles.container} >
          <Button
            onPress={() => {
              console.log("henlo")
              this.props.navigation.navigate('Main')
            }}
            title="Authenticate with Google"
          />
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