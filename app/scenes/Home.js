import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button
} from 'react-native';

import AppData from '../data/Data'

class Home extends React.Component {
  static navigationOptions = {
    title: 'Seleção de Dentes',
  }

  onToothPress = (route, params) => {
    const { navigate } = this.props.navigation;
    navigate(route, params)
  }

  render() {
    return (
      <ScrollView>
        { 
          AppData.teeth.map((tooth, index) => (
            <Button
              key={index}
              title={tooth.name}
              onPress={() => this.onToothPress(tooth.route, tooth.params)}
            />  
          ))
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Home
