const vestibular = require('../../../assets/inciso-central-superior/vestibular.png')
const distal = require('../../../assets/inciso-central-superior/distal.png')
const incisal = require('../../../assets/inciso-central-superior/incisal.png')
const lingual = require('../../../assets/inciso-central-superior/lingual.png')
const mesial = require('../../../assets/inciso-central-superior/mesial.png')

const dimensoes1 = require('../../../assets/inciso-central-superior/dimensoes1_inciso_frontal.png')
const dimensoes2 = require('../../../assets/inciso-central-superior/dimensoes2_inciso_frontal.png')

const acessoInstrumento = require('../../../assets/inciso-central-superior/acesso_instrumento.png')

export default {
  tabName: 'Acesso',
  params: {
    buttons: [
      {
        name: 'faces',
        params: [
          {
            type: 'picker',
            picker: [
              {
                name: 'Instrumento',
                params: [
                  {
                    type: 'imageSource',
                    imageSources: [
                      {
                        source: acessoInstrumento,
                        width: 60,
                        height: 60
                      }
                    ],
                  }
                ]
              },
              {
                name: 'Lingual',
                imageSource: lingual
              },
              {
                name: 'Mesial',
                imageSource: mesial
              },
              {
                name: 'Distal',
                imageSource: distal
              }
            ]
          }
        ],
      },
      {
        name: 'dimensões',
        params: [
          {
            type: 'table',
            columns: [
              [
                null,
                'Tamanho do dente',
                'Tamanho da coroa',
                'Tamanho mesiodistal',
                'Inclinação mesiodistal',
                'Inclinação vestibulolingual'
              ],
              [
                'Mínimo',
                '20,43',
                '9,15',
                '10,73',
                '7,03',
                '-',
                '-'
              ],
              [
                'Médio',
                '23,55',
                '10,77',
                '13,51',
                '8,34',
                '3°',
                '17°'
              ],
              [
                'Máximo',
                '27,21',
                '12,87',
                '16,48',
                '9,48',
                '-',
                '-'
              ],
            ]
          },
          {
            type: 'imageSource',
            imageSources: [
              {
                source: dimensoes1,
                  width: 60,
                  height: 60
              },
              {
                source: dimensoes2,
                width: 60,
                height: 60
              }
            ],
          },
        ],
      },
      {
        name: 'desenvolvimento',
        params: [
          {
            type: 'table',
            columns: [
              [
                'Início da formação dos tecidos duros',
                'Esmalte completo',
                'Erupção',
                'Raiz Completa'
              ],
              [
                '3-4 meses',
                '4-5 anos',
                '7-8 anos',
                '10 anos'
              ]
            ]
          }
        ]
      }
    ]
  }
}