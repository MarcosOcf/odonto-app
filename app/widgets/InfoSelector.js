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
    table && <Table params={table} />
  )

  renderImagesOptions = (images) => (
    images && map(images, (image, i) => (
      <Image
        key={i}
        style={{ width: image.width, height: image.height }}
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
                    <View style={[styles.infos, { alignSelf: 'stretch' }]} key={i}>
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
  infos: {
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
