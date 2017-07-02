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

import { Grid, Row, Col } from 'react-native-elements';

import get from 'lodash/get'
import map from 'lodash/map'

class TableComponent extends React.Component {
  mapRows = (rows) => (
    map(rows, (text, i) => (
      <Row key={i}>
        <Text>
          {text}
        </Text>
      </Row>
    ))
  )

  renderColumns = (columns) => (
    map(columns, (rows, i) => (
      <Col key={i}>
        { this.mapRows(rows) }
      </Col>
    ))
  )

  render() {
    const { columns } = this.props.params
    return (
      <Grid>
        {this.renderColumns(columns)}
      </Grid>
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

export default TableComponent
