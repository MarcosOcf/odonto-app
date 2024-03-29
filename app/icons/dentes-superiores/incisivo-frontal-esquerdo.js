import React, { Component } from 'react'
import { G, Path } from 'react-native-svg';

const incisivoFrontalEsquerdo = (props) => (
  <G
    onPress={props.onPress}
    onPressIn={props.onPressIn}
    onPressOut={props.onPressOut}>
    <Path
      fill={props.fill}
      d="M1159.85 276.75c.652 6.007 35.732 67.866 44.576 95.807 11.959 30.166 31.004 57.437 81.709 71.766 41.404-5.084 83.398-6.172 118.25-55.725l85.686-129.949 15.625-41.338c11.284-29.849-13.15-57.295-36.025-69.06l-62.025-16.542c-36.227-2.321-60.273-12.939-131.057 8.278l-66.418 14.481c-24.162 10.655-56.428 6.484-57.055 60.196 1.269 20.53-6.772 39.484 6.734 62.086z" />
    <Path
      fill="#F5F5F5"
      d="M1229.898 192.451c112.898-43.966 178.143-11.738 196.557-2.072" />
  </G>
)

export default WithToothClick(incisivoFrontalEsquerdo)