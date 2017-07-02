import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Picker,
  Image
} from 'react-native';

import get from 'lodash/get'

import { SegmentedControls } from 'react-native-radio-buttons'

class PickerComponent extends React.Component {
  state = {
    picker: null,
  }

  renderText = (text) => (
    text && <Text> {text} </Text>
  )

  renderImage = (image) => (
    image && (
      <Image
        style={{ width: 120, height: 300 }}
        source={image}
      />
    )
  )

  renderTable = (table) => (
    table && (
      <Image
        style={{ width: 120, height: 300 }}
        source={image}
      />
    )
  )

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
    const { selectedPicker } = this.state

    return (
      <ScrollView>
        <ScrollView horizontal style={{paddingBottom: 20, margin: 10}}>
          <SegmentedControls
            options={this.props.params}
            onSelection={this.setSelectedOption}
            selectedOption={selectedPicker}
            renderOption={this.renderOption}
          />
        </ScrollView>
        {
           selectedPicker && (
            <ScrollView>
              <View style={styles.pickerInfos}>
                {this.renderText(selectedPicker.value)}
                {this.renderImage(selectedPicker.imageSource)}
                {this.renderTable(selectedPicker.table)}
              </View>
            </ScrollView>
          )         
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  pickerInfos: {
    justifyContent: 'center',
    alignItems: 'center'
  },
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
