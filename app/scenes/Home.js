import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button
} from 'react-native';

import { Icon } from 'react-native-elements'

import AppData from '../data/Data'
import Dentes from '../icons/dentes'

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Endo X',
    headerLeft: (
      <Icon
        name='menu'
        containerStyle={styles.headerIconContainer}
        onPress={() => navigation.navigate('DrawerOpen')}
      />
    )
  })

  onToothPress = (route, params) => {
    const { navigate } = this.props.navigation;
    navigate(route, params)
  }

  propsFor = (tooth) => {
    return {
      onPress: () => this.onToothPress(tooth.route, tooth.params),
      defaultColor: '#FFF',
      onPressColor: '#F8BBD0'
    }
  }

  teethData() {
    let props = {}
    
    Object.keys(AppData.teeth).forEach((toothName) => {
      props[toothName] = this.propsFor(AppData.teeth[toothName])
    })

    return props
  }

  render() {
    return (
      <View style={styles.container}>
        <Dentes teethData={this.teethData()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerIconContainer: {
    marginLeft: 15,
    padding: 5
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BBDEFB',
  }
});

export default Home
