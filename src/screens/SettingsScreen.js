import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Auth } from 'aws-amplify'


export default class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Button
          onPress={() => Auth.signOut()}
          title="Sign Out"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});