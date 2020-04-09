import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Auth } from 'aws-amplify'


export default class LoginScreen extends Component {
  render() {
    return (
        <View style={styles.container} >
          <Button
            onPress={() => Auth.federatedSignIn({ provider: "Google" })}
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