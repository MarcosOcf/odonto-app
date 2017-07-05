import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  Image
} from 'react-native';

const uff = require('../assets/menu/Picture1.png')
const iprj = require('../assets/menu/iprj.png')

import { Icon } from 'react-native-elements';

class Menu extends React.Component {
  static navigationOptions = {
    title: 'Seleção de Dentes',
  }

  state = {
    autoresVisible: false,
    faleConoscoVisible: false,
    bibliografiaVisible: false
  }

  renderAutoresModal = () => (
    <Modal
      animationType={"slide"}
      transparent={false}
      visible={this.state.autoresVisible}
      onRequestClose={() => { this.setState({ autoresVisible: false }) }}
    >
      <TouchableOpacity style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', }}
        onPress={() => { this.setState({ autoresVisible: false }) }}>
        <View>
          <Text>Profª Isis Andrea Venturini Pola Poiate</Text>
          <Text>Mestranda Ariane Ferraz</Text>
          <Text>Profª Erlange</Text>
          <Text>Profª Cinthya Gomes</Text>
          <Text>Profª Wantuil Rodrigues Araújo Filho</Text>
          <Text>Leonardo Antunes</Text>

          <Image
            resizeMode='contain'
            style={{ width: 280 }}
            source={uff}
          />
        </View>

        <View>
          <Text>Edgar Poiate Junior</Text>
          <Text>Graduando Marcos de Oliveira Couto Filho</Text>

          <Image
            resizeMode='contain'
            style={{ width: 280 }}
            source={iprj}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  )

  renderFaleConoscoModal = () => (
    <Modal
      animationType={"slide"}
      transparent={false}
      visible={this.state.faleConoscoVisible}
      onRequestClose={() => { this.setState({ faleConoscoVisible: false }) }}
    >
      <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }} onPress={() => { this.setState({ faleConoscoVisible: false }) }}>
        <Text>poiate@yahoo.com</Text>
      </TouchableOpacity>
    </Modal>
  )

  renderBibliografiaModal = () => (
    <Modal
      animationType={"slide"}
      transparent={false}
      visible={this.state.bibliografiaVisible}
      onRequestClose={() => { this.setState({ bibliografiaVisible: false }) }}
    >
      <TouchableOpacity 
        onPress={() => { this.setState({ bibliografiaVisible: false }) }}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}
        >
        <Text style={{padding: 20}}>Cohen S & Hargreaves KM.  Caminhos da Polpa. 9ª. ed., Ed. Elsevier Editora Ltda, Rio de Janeiro, 2007. 1079p.</Text>
        <Text style={{ padding: 20 }}> De Deus QD.  Endodontia. 2ª. Ed.  Rio de Janeiro. Ed. Medsi. 1991. 545p.</Text>
        <Text style={{ padding: 20 }}> Gomes C, Antunes L, Araújo Filho WR. Endodontia: Manual de orientação para preparo químico cirúrgico do canal radicular. Universidade Federal Fluminense. 2016.</Text>
        <Text style={{ padding: 20 }}> Lemos EM. 2013. http://www.endo-e.com Acessado em 01/07/2017. </Text>
        <Text style={{ padding: 20 }}> Lopes HP & Siqueira JF. Endodontia: Biologia e Técnica. 3ª. ed. Rio de Janeiro. Ed. Guanabara Koogan Ltda. 2011. 951p. </Text>
      </TouchableOpacity>
    </Modal>
  )

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center'}}>
        <TouchableOpacity 
          onPress={() => {this.setState({autoresVisible: true})}}
          style={{ alignItems: 'flex-end', flexDirection: 'row', padding: 20}}
        >
          <View style={{ alignItems: 'flex-end', flexDirection: 'row'}}>
            <Icon name='group'/>
            <Text > Autores </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { this.setState({ faleConoscoVisible: true }) }}
          style={{ alignItems: 'center', flexDirection: 'row', padding: 20 }}
        >
          <View style={{ alignItems: 'center', flexDirection: 'row' }}>
            <Icon name='email'/>
            <Text>Fale Conosco </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => { this.setState({ bibliografiaVisible: true }) }}
          style={{ alignItems: 'flex-start', flexDirection: 'row', padding: 20 }}
        >
          <View style={{ alignItems: 'flex-start', flexDirection: 'row' }}>
            <Icon name='library-books'/>
            <Text> Bibliografia </Text>
          </View>
        </TouchableOpacity>
        {this.renderAutoresModal()}
        {this.renderFaleConoscoModal()}
        {this.renderBibliografiaModal()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BBDEFB',
  }
});

export default Menu
