import React, { Component } from 'react'
import { G, Path } from 'react-native-svg';
import { StyleSheet } from 'react-native'

export default class PrimeiroMolarDireito extends Component {
  state = {
    defaultColor: true
  }

  toogleColor = () => {
    this.setState({ defaultColor: !this.state.defaultColor })
  }

  render() {
    return (
      <G 
        onPress={this.props.onPress}
        onPressIn={this.toogleColor}
        onPressOut={this.toogleColor}>
        <Path
          fill={this.state.defaultColor ? this.props.defaultColor : this.props.onPressColor}
          d="M2726.802 1225.336c-99.025-85.947-172.029-36.305-245.037 13.317-19.715 24.465-39.002 48.929-66.006 73.413-82.688 79.467-67.135 133.397-19.25 178.924 29.846 33.111 58.43 65.596 73.479 91.357 17.25 17.76 33.109 31.385 46.58 37.906 63.742 28.623 88.08-11.297 123.861-31.311 128.557-67.758 174.596-162.145 141.516-282.062-3.645-46.231-25.389-69.065-55.143-81.544z" />
        <Path
          fill="#F5F5F5"
          d="M2552.308 1284.948c-4.379 32.875 13.678 65.692 31.244 98.51 18.166 17.679 12.27 65.598 17.164 99.956-17.797 16.961-35.637 17.151-53.48 15.633l-33.727 29.666" />
        <Path
          fill="#F5F5F5"
          d="M2693.304 1342.325c-12.074 13.087-21.09 28.2-54.859 26.904-19.254-2.464-38.508-3.707-57.723 8.603m-100.063-23.683c36.9 6.345 91.441 3.81 101.471 23.679m90.457 120.891c-37.576 17.006-53.496-.845-73.273-12.484" />
      </G>
    )  
  }
}
