import React from 'react'
import { Text } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'

import Home from './scenes/home'

import Access from './scenes/access'
import ExternalAnatomy from './scenes/external-anatomy'
import InternalAnatomy from './scenes/internal-anatomy'
import PrepQuimMec from './scenes/prep-quim-mec'

const TabAnatomy = TabNavigator({
  ExternalAnatomy: { screen: ExternalAnatomy },
  InternalAnatomy: { screen: InternalAnatomy },
  Access: { screen: Access },
  PrepQuimMec: { screen: PrepQuimMec },
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
