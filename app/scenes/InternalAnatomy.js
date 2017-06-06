import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

class InternalAnatomy extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.pageName}`,
    tabBarLabel: 'Anatomia Interna',
  })

  render() {
    return (
      <Text>Internal Anatomy</Text>
    );
  }
}
export default InternalAnatomy
