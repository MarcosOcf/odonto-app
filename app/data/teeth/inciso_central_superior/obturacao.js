import { Dimensions } from 'react-native'

const obturacao = require('../../../assets/inciso-central-superior/obturacao.png')
const { width } = Dimensions.get('window');

export default {
  tabName: 'Obturação',
  params: {
    buttons: [
      {
        name: 'Procedimentos',
        params: [
          {
            type: 'imageSource',
            imageSources: [
              {
                source: obturacao,
                width: width - 20,
                height: width + 50
              }
            ],
          }
        ]
      }
    ]
  }
}