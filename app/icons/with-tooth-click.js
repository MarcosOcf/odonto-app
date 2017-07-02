import React, { Component } from 'react'
import { G, Path } from 'react-native-svg';
import { StyleSheet } from 'react-native'

export default WithToothClick = (InnerElement) => (
  class DenteClick extends Component {
    static defaultProps = {
      defaultColor: '#FFF',
      onPressColor: '#F8BBD0'
    }

    state = {
      defaultColor: true
    }

    toogleColor = () => {
      this.setState({ defaultColor: !this.state.defaultColor })
    }

    render() {
      const { onPress, defaultColor, onPressColor } = this.props

      return (
        <G>
          { InnerElement({
            fill: this.state.defaultColor ? defaultColor : onPressColor,
            onPress: onPress,
            onPressIn: this.toogleColor,
            onPressOut: this.toogleColor
          }) }
        </G>
      )
    }
  }
)