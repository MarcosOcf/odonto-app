import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import App from './app/App'

export default class odonto extends Component {
  render() {
    return <App />
  }
}

AppRegistry.registerComponent('odonto', () => odonto);
