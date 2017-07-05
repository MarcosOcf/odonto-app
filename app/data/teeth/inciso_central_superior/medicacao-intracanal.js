import { Dimensions } from 'react-native'

const medIntracanal = require('../../../assets/inciso-central-superior/med-intracanal.png')
const { width } = Dimensions.get('window');

export default {
  tabName: 'Medicação Intracanal',
  params: {
    buttons: [
      {
        name: 'Procedimentos',
        params: [
          {
            type: 'imageSource',
            imageSources: [
              {
                source: medIntracanal,
                width: width,
                height: width
              }
            ],
          }
        ]
      }
    ]
  }
}