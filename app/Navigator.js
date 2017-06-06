import React from 'react'
import { Text } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'

import Home from './scenes/Home'
import Anatomy from './scenes/Anatomy'
import InternalAnatomy from './scenes/InternalAnatomy'

const TabAnatomy = TabNavigator({
  Anatomy: { screen: Anatomy },
  InternalAnatomy: { screen: InternalAnatomy },
});

const ModalStack = StackNavigator({
  Home: {
    screen: Home,
  },
  AnatomySelector: {
    screen: TabAnatomy
  }
});

export default ModalStack
