const acessoInstrumento = require('../../../assets/inciso-central-superior/acesso_instrumento.png')
const pontoDeEleicao = require('../../../assets/inciso-central-superior/ponto_de_eleicao.png')
const direcaoDeTrepanacao1 = require('../../../assets/inciso-central-superior/direcao_de_trepanacao1.png')
const direcaoDeTrepanacao2 = require('../../../assets/inciso-central-superior/direcao_de_trepanacao2.png')
const formaDeContorno1 = require('../../../assets/inciso-central-superior/forma_de_contorno.png')
const formaDeContorno2 = require('../../../assets/inciso-central-superior/forma_de_contorno2.png')
const formaDeConveniencia1 = require('../../../assets/inciso-central-superior/forma_de_conveniencia1.png')
const formaDeConveniencia2 = require('../../../assets/inciso-central-superior/forma_de_conveniencia2.png')

import { Dimensions } from 'react-native'

const { width,  } = Dimensions.get('window');
export default {
  tabName: 'Acesso',
  params: {
    buttons: [
      {
        name: 'Instrumental',
        params: [
          {
            type: 'imageSource',
            imageSources: [
              {
                source: acessoInstrumento,
                width,
                height: width
              }
            ],
          }
        ]
      },
      {
        name: 'Ponto de eleição',
        params: [
          {
            size: 1,
            type: 'text',
            text: 'Após o isolamento absoluto, realizar o ponto de eleição com a broca esférica na parte mais central da área lingual, nas proximidades do cíngulo.'
          },
          {
            size: 4,
            type: 'imageSource',
            imageSources: [
              {
                source: pontoDeEleicao,
                  width: width,
                  height: width - 30
              }
            ],
          },
        ],
      },
      {
        name: 'Direção de trepanação',
        params: [
          {
            size: 1,
            type: 'text',
            text: 'Inicialmente perpendicular e posteriormente paralelo ao eixo do dente.'
          },
          {
            type: 'imageSource',
            size: 6,
            imageSources: [
              {
                source: direcaoDeTrepanacao1,
                width: 200,
                height: 200
              },
            ],
          },
          {
            type: 'imageSource',
            size: 6,
            imageSources: [
              {
                source: direcaoDeTrepanacao2,
                width: width,
                height: 200
              }
            ],
          },
        ],
      },
      {
        name: 'Forma de contorno',
        params: [
          {
            size: 1,
            type: 'text',
            text: 'Forma triangular com base voltada para a incisal.'
          },
          {
            size: 6,
            type: 'imageSource',
            imageSources: [
              {
                source: formaDeContorno1,
                width: 200,
                height: 200
              }
            ],
          },
          {
            size: 6,
            type: 'imageSource',
            imageSources: [
              {
                source: formaDeContorno2,
                width: width,
                height: 200
              }
            ],
          },
        ],
      },
      {
        name: 'Forma de conveniência',
        params: [
          {
            size: 1,
            type: 'text',
            text: 'Desgaste compensatório  que proporcionará expulsividade às paredes.'
          },
          {
            size: 6,
            type: 'imageSource',
            imageSources: [
              {
                source: formaDeConveniencia1,
                width: 200,
                height: 200
              }
            ],
          },
          {
            size: 7,
            type: 'imageSource',
            imageSources: [
              {
                source: formaDeConveniencia2,
                width: 300,
                height: 200
              }
            ],
          },
        ],
      }
    ]
  }
}