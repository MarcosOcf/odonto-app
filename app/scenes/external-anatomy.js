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

import { Grid, Row } from 'react-native-elements'
import { SegmentedControls } from 'react-native-radio-buttons'

import InfoSelector from '../widgets/InfoSelector'
import Table from '../widgets/Table'

import map from 'lodash/map'
import get from 'lodash/get'

class ExternalAnatomy extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.pageName}`,
    tabBarLabel: `${navigation.state.params.externalAnatomy.tabName}`
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
        resizeMode='contain'
        source={image.source}
      />
    ))
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
  }

  componentDidMount() {
    this.setState({
      selectedOption: get(this.props.navigation.state.params.externalAnatomy.params.buttons, '[0]')
    })
  }

  render() {
    const { params } = this.props.navigation.state;
    const { selectedOption } = this.state

    return (
      <Grid>
        <Row size={15}>
          <ScrollView horizontal style={{ paddingBottom: 20, margin: 10 }}>
            <SegmentedControls
              options={params.externalAnatomy.params.buttons}
              onSelection={this.setSelectedOption}
              selectedOption={this.state.selectedOption}
              renderOption={this.renderOption}
            />
          </ScrollView>
        </Row>
        <Row size={85}>
          {
            <Grid style={styles.infos}>
              {selectedOption && map(selectedOption.params, (item, i) => (
                <Row size={item.size || 1} key={i}>
                  {this.renderItem(item)}
                </Row>
              ))}
            </Grid>
          }
        </Row>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  infos: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
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


export default ExternalAnatomy
