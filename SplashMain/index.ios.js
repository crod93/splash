/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  
} from 'react-native';
import Root from './components/root.js'

class Splash extends Component {
  render() {
    return (
      <Root/>

    );
  }
}



AppRegistry.registerComponent('Splash', () => Splash);
