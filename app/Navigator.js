import React from 'react'
import { Text } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'

import Home from './scenes/home'
import ExternalAnatomy from './scenes/external-anatomy'
import InternalAnatomy from './scenes/internal-anatomy'

const TabAnatomy = TabNavigator({
  ExternalAnatomy: { screen: ExternalAnatomy },
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
