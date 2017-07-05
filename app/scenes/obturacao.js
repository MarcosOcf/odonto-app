import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  Button,
  TouchableWithoutFeedback
} from 'react-native';

import { SegmentedControls } from 'react-native-radio-buttons'

import InfoSelector from '../widgets/InfoSelector'
import Table from '../widgets/Table'

import map from 'lodash/map'

class Obturacao extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.pageName}`,
    tabBarLabel: `${navigation.state.params.obturacao.tabName}`
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

  renderTextOptions = (text) => (
    <Text> { text } </Text>
  )

  renderItem = (item) => {
    if (item.type == 'imageSource') {
      return this.renderImagesOptions(item.imageSources)
    }

    if (item.type == 'picker') {
      return this.renderPickerOptions(item.picker)
    }

    if (item.type == 'table') {
      return this.renderTableOptions(item)
    }

    if (item.type == 'text') {
      return this.renderTextOptions(item.text)
    }
  }

  render() {
    const { params } = this.props.navigation.state;
    const { selectedOption } = this.state

    return (
      <ScrollView>
        <View>
          <View style={{ height: 70 }}>
            <ScrollView horizontal style={{ paddingBottom: 20, margin: 10 }}>
              <SegmentedControls
                options={params.obturacao.params.buttons}
                onSelection={this.setSelectedOption}
                selectedOption={this.state.selectedOption}
                renderOption={this.renderOption}
              />
            </ScrollView>
          </View>
          {
            selectedOption && (
              <ScrollView vertical>
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
        </View>
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
    width: 120,
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

export default Obturacao
