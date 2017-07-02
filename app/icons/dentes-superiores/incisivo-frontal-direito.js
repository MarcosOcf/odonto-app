import React, { Component } from 'react'
import { G, Path } from 'react-native-svg';
import WithToothClick from '../with-tooth-click'

const incisivoFrontalDireito = (props) => (
  <G
    onPress={props.onPress}
    onPressIn={props.onPressIn}
    onPressOut={props.onPressOut}>
    <Path
      fill={props.fill}
      d="M1858.944 276.75c13.506-22.603 5.465-41.556 6.734-62.086-.627-53.711-32.893-49.541-57.055-60.196l-66.418-14.481c-70.783-21.217-94.83-10.599-131.057-8.278l-62.025 16.542c-22.875 11.765-47.31 39.211-36.026 69.06l15.626 41.338 85.686 129.949c34.852 49.553 76.846 50.641 118.25 55.725 50.705-14.329 69.75-41.6 81.709-71.766 8.844-27.941 43.924-89.799 44.576-95.807z" />
    <Path
      fill="#F6F6F6"
      d="M1592.339 190.379c18.414-9.667 83.658-41.894 196.557 2.072" />
  </G>
)

export default WithToothClick(incisivoFrontalDireito)