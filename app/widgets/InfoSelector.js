import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Picker
} from 'react-native';

import get from 'lodash/get'

import { RadioButtons } from 'react-native-radio-buttons'

class PickerComponent extends React.Component {
  state = {
    picker: null,
  }

  componentDidMount() {
    this.setState({
      selectedPicker: get(this.props.params, '[0].value')
    })
  }

  render() {
    return (
      <View>
        <Picker
          selectedValue={this.state.selectedPicker}
          onValueChange={(value) => this.setState({ selectedPicker: value })}>
          {
            this.props.params.map((item, key) => (
              <Picker.Item label={item.name} value={item.value} key={key} />
            ))
          }
        </Picker>
        {
          this.state.selectedPicker && <Text>{this.state.selectedPicker} </Text>
        }
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default PickerComponent
