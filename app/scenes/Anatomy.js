import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback
} from 'react-native';

import InfoSelector from '../widgets/InfoSelector'

import { RadioButtons } from 'react-native-radio-buttons'

class Anatomy extends React.Component {
  state = {
    selectedOption: null,
  }

  onPress = (route, params) => {
    const { navigate } = this.props.navigation;
    navigate(route, params)
  }

  renderOption = (option, selected, onSelect, index) => {
    const style = selected ? { fontWeight: 'bold' } : {};

    return (
      <TouchableWithoutFeedback onPress={onSelect} key={index}>
        <View>
          <Text style={style}>{option.name}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  setSelectedOption = (option) => {
    this.setState({ selectedOption: option })
  }

  render() {
    const { params } = this.props.navigation.state;

    return (
      <View>
        <RadioButtons
          options={params.buttons.map((button) => button)}
          onSelection={this.setSelectedOption}
          selectedOption={this.state.selectedOption}
          renderOption={this.renderOption}
          renderContainer={RadioButtons.renderHorizontalContainer}
        />
        {
          this.state.selectedOption && <InfoSelector params={this.state.selectedOption.picker} />
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

export default Anatomy
