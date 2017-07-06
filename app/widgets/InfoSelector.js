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

import Table from '../widgets/Table'
import { SegmentedControls } from 'react-native-radio-buttons'

import get from 'lodash/get'
import map from 'lodash/map'

class PickerComponent extends React.Component {
  state = {
    picker: null,
  }

  renderText = (text) => (
    text && <Text> {text} </Text>
  )

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

  componentDidMount() {
    this.setState({
      selectedOption: get(this.props.params, '[0]')
    })
  }

  renderPickerOptions = (picker) => (
    <InfoSelector params={picker} />
  )

  renderTableOptions = (table) => (
    table && (
      <Table params={table} />
    )
  )

  renderImagesOptions = (images) => (
    images && map(images, (image, i) => (
      <Image
        key={i}
        resizeMode='contain'
        style={{  height: image.height }}
        source={image.source}
      />
    ))
  )

  renderItem = (item) => {
    if (item.type == 'imageSource') {
      return this.renderImagesOptions(item.imageSources)
    }

    if (item.type == 'table') {
      return this.renderTableOptions(item)
    }

    if (item.type == 'text') {
      return this.renderText(item.text)
    }
  }

  render() {
    const { selectedOption } = this.state

    return (
      <ScrollView>
        <ScrollView horizontal style={{paddingBottom: 20, margin: 10}}>
          <SegmentedControls
            options={this.props.params}
            onSelection={this.setSelectedOption}
            selectedOption={selectedOption}
            renderOption={this.renderOption}
          />
        </ScrollView>
        {
           selectedOption && (
            <ScrollView>
              <View style={styles.infos}>
                {map(selectedOption.params, (item, i) => (
                  <View style={[styles.item]} key={i}>
                    {this.renderItem(item)}
                  </View>
                ))}
              </View>
            </ScrollView>
          )         
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  infos: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
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
