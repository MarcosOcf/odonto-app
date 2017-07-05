const instrumental = require('../../../assets/inciso-central-superior/prep-quim-instrumental.png')
const caixaEndodontica = require('../../../assets/inciso-central-superior/caixa-endodontica.png')
const bancadaDeProcedimentos = require('../../../assets/inciso-central-superior/bancada-de-procedimentos.png')

import { Dimensions } from 'react-native'

const { width, } = Dimensions.get('window');

export default {
  tabName: 'Prep. Químico Mecânico',
  params: {
    buttons: [
      {
        name: 'Instrumental',
        params: [
          {
            type: 'imageSource',
            imageSources: [
              {
                source: instrumental,
                width: 350,
                height: 400
              }
            ],
          }
        ]
      },
      {
        name: 'Organizacao',
        params: [
          {
            type: 'text',
            text: 'Organização da caixa endodôntica'
          },
          {
            type: 'imageSource',
            imageSources: [
              {
                source: caixaEndodontica,
                width: 230,
                height: 230
              }
            ],
          },
          {
            type: 'text',
            text: 'Organização da bancada de procedimento'
          },
          {
            type: 'imageSource',
            imageSources: [
              {
                source: bancadaDeProcedimentos,
                width: 200,
                height: 200
              }
            ],
          },
        ]
      },
    ]
  }
}