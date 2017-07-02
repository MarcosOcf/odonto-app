const vestibular = require('../../../assets/inciso-central-superior/vestibular.png')
const distal = require('../../../assets/inciso-central-superior/distal.png')
const incisal = require('../../../assets/inciso-central-superior/incisal.png')
const lingual = require('../../../assets/inciso-central-superior/lingual.png')
const mesial = require('../../../assets/inciso-central-superior/mesial.png')

const dimensoes1 = require('../../../assets/inciso-central-superior/dimensoes1_inciso_frontal.png')
const dimensoes2 = require('../../../assets/inciso-central-superior/dimensoes2_inciso_frontal.png')

export default {
  tabName: 'Anatomia Externa',
  params: {
    buttons: [
      {
        name: 'faces',
        params: [
          {
            type: 'picker',
            picker: [
              {
                name: 'Vestibular',
                value: 'Tem o formato trapedoizal, sendo o lado cervical menor e o lado oclusal maior A superfície da face vestibular é totalmente convexa. Apresentam dois sulcos verticais, sendo o mesial mais prolongado, chegando a atingir o terço médio da coroa, determinando o forame cego. Pode apresentar o tubérculo de Zuckerckandl',
                imageSource: vestibular
              },
              {
                name: 'Lingual',
                value: 'Apresenta 2 cúspides que são separadas entre si pelo          sulcovestíbulo-lingual; O lado proximal mesial é mais alto que o distal.',
                imageSource: lingual
              },
              {
                name: 'Mesial',
                value: 'Possui formato pentagonal. Apresenta 5 cúspides (3 vestibulares, 2 linguais) A cúspide mésio vestibular é a mais volumosa e a mais alta. Os lados proximais são retilíneos',
                imageSource: mesial
              },
              {
                name: 'Distal',
                value: 'distal',
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