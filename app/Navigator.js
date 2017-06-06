import React from 'react'
import { Text } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'

import Home from './scenes/Home'
import Tooth from './scenes/Tooth'
import Anatomy from './scenes/Anatomy'

const TabAnatomy = TabNavigator({
  Anatomy: { screen: Anatomy },
  InternalAnatomy: { screen: Anatomy },
});

const ModalStack = StackNavigator({
  Home: {
    screen: Home,
  },
  Tooth: {
    screen: Tooth
  },
  Anatomy: {
    screen: Anatomy
  }
});

export default ModalStack
