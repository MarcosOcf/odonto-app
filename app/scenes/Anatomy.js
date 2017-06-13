import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback
} from 'react-native';

import InfoSelector from '../widgets/InfoSelector'

import { SegmentedControls } from 'react-native-radio-buttons'

class Anatomy extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.pageName}`,
    tabBarLabel: 'Anatomia',
  })

  state = {
    selectedOption: null,
  }

  onPress = (route, params) => {
    const { navigate } = this.props.navigation;
    navigate(route, params)
  }

  renderOption = (option, selected, onSelect, index) => {  
    return (
      <Text style={[styles.radioText, selected && styles.radioTextSelected]} onPress={onSelect} >
        {option.name}
      </Text>
    );
  }

  setSelectedOption = (option) => {
    this.setState({ selectedOption: option })
  }

  render() {
    const { params } = this.props.navigation.state;

    return (
      <View>
        <View style={styles.radioControlsWrapper}>
          <SegmentedControls
            options={params.anatomy.params.buttons.map((button) => button)}
            onSelection={this.setSelectedOption}
            selectedOption={this.state.selectedOption}
            renderOption={this.renderOption}
          />
        </View>
        {
          this.state.selectedOption && <InfoSelector params={this.state.selectedOption.picker} />
        }
      </View>
    );
  }
}
 

const styles = StyleSheet.create({
  radioText: {
    textAlign: 'center',
    color: '#007AFF',
    backgroundColor: '#ffffff'
  },
  radioTextSelected: {
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#007AFF'
  },
  radioControlsWrapper: {
    margin: 20
  }
});

export default Anatomy
