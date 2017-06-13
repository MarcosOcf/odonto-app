import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Picker
} from 'react-native';

import get from 'lodash/get'

import { SegmentedControls } from 'react-native-radio-buttons'

class PickerComponent extends React.Component {
  state = {
    picker: null,
  }

  renderOption = (option, selected, onSelect, index) => {
    return (
      <Text style={[styles.radioText, selected && styles.radioTextSelected]} onPress={onSelect} >
        {option.name}
      </Text>
    );
  }

  setSelectedOption = (option) => {
    this.setState({ selectedPicker: option })
  }

  componentDidMount() {
    this.setState({
      selectedPicker: get(this.props.params, '[0]')
    })
  }

  render() {
    return (
      <View>
        <ScrollView horizontal style={{paddingBottom: 20, margin: 10}}>
          <SegmentedControls
            options={this.props.params}
            onSelection={this.setSelectedOption}
            selectedOption={this.state.selectedPicker}
            renderOption={this.renderOption}
          />
        </ScrollView>
        {
           this.state.selectedPicker && <Text>{this.state.selectedPicker.value} </Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  radioText: {
    width: 100,
    textAlign: 'center',
    color: '#007AFF',
    backgroundColor: '#ffffff'
  },
  radioTextSelected: {
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#007AFF'
  },
});

export default PickerComponent
