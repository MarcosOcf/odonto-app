import React from 'react'
import { Text } from 'react-native'
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation'

import Home from './scenes/home'
import Access from './scenes/access'
import ExternalAnatomy from './scenes/external-anatomy'
import InternalAnatomy from './scenes/internal-anatomy'
import PrepQuimMec from './scenes/prep-quim-mec'
import MedIntraCan from './scenes/medicacao-intracanal'
import Obturacao from './scenes/obturacao'

import MenuScene from './scenes/menu-scene'

const TabAnatomy = TabNavigator({
  ExternalAnatomy: { screen: ExternalAnatomy },
  InternalAnatomy: { screen: InternalAnatomy },
  Access: { screen: Access },
  PrepQuimMec: { screen: PrepQuimMec },
  MedIntraCan: { screen: MedIntraCan },
  Obturacao: { screen: Obturacao }
}, {
    tabBarOptions: {
      scrollEnabled: true,
      lazy: true,
      tabStyle: {
        height: 50,
        width: 200
      },
    }
});

const ModalStack = StackNavigator({
  Home: {
    screen: Home,
  },
  AnatomySelector: {
    screen: TabAnatomy
  }
});

const MenuRoutes = DrawerNavigator({
  Menu: {
    screen: ModalStack
  }
}, {
  contentComponent: MenuScene
})

export default MenuRoutes
