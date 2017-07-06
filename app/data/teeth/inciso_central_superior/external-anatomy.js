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
                params: [
                  {
                    type: 'imageSource',
                    imageSources: [
                      {
                        source: vestibular,
                        width: 200,
                        height: 200
                      }
                    ],
                  }
                ]
              },
              {
                name: 'Lingual',
                params: [
                  {
                    type: 'imageSource',
                    imageSources: [
                      {
                        source: lingual,
                        width: 200,
                        height: 200
                      }
                    ],
                  }
                ]
              },
              {
                name: 'Mesial',
                params: [
                  {
                    type: 'imageSource',
                    imageSources: [
                      {
                        source: mesial,
                        width: 200,
                        height: 200
                      }
                    ],
                  }
                ]
              },
              {
                name: 'Distal',
                params: [
                  {
                    type: 'imageSource',
                    imageSources: [
                      {
                        source: distal,
                        width: 200,
                        height: 200
                      }
                    ],
                  }
                ]
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
                {
                  type: 'text',
                  text: 'Tamanho do dente',
                },
                {
                  type: 'text',
                  text: 'Tamanho da coroa',
                },
                {
                  type: 'text',
                  text: 'Tamanho mesiodistal',
                },
                {
                  type: 'text',
                  text: 'Inclinação mesiodistal',
                },
                {
                  type: 'text',
                  text: 'Inclinação vestibulolingual',
                },
              ],
              [
                {
                  type: 'text',
                  text: 'Mínimo',
                },
                {
                  type: 'text',
                  text: '20,43',
                },
                {
                  type: 'text',
                  text: '9,15',
                },
                {
                  type: 'text',
                  text: '10,73',
                },
                {
                  type: 'text',
                  text: '7,03',
                },
                {
                  type: 'text',
                  text: '-',
                },
                {
                  type: 'text',
                  text: '-',
                },
              ],
              [
                {
                  type: 'text',
                  text: 'Médio',
                },
                {
                  type: 'text',
                  text: '23,55',
                },
                {
                  type: 'text',
                  text: '10,77',
                },
                {
                  type: 'text',
                  text: '13,51',
                },
                {
                  type: 'text',
                  text: '8,34',
                },
                {
                  type: 'text',
                  text: '3°',
                },
                {
                  type: 'text',
                  text: '17°'
                },
              ],
              [
                {
                  type: 'text',
                  text: 'Máximo',
                },
                {
                  type: 'text',
                  text: '27,21',
                },
                {
                  type: 'text',
                  text: '12,87',
                },
                {
                  type: 'text',
                  text: '16,48',
                },
                {
                  type: 'text',
                  text: '9,48',
                },
                {
                  type: 'text',
                  text: '-',
                },
                {
                  type: 'text',
                  text: '-',
                },
              ],
            ]
          },
          {
            type: 'table',
            columns: [
              [
                {
                  type: 'imageSource',
                  imageSources: [
                    {
                      source: dimensoes1,
                      width: 200,
                      height: 200,
                    },
                  ],
                },
              ],
              [
                {
                  type: 'imageSource',
                  imageSources: [
                    {
                      source: dimensoes2,
                      width: 200,
                      height: 200,
                    }
                  ],
                },
              ]
            ]
          }
          
        ],
      },
      {
        name: 'desenvolvimento',
        params: [
          {
            type: 'table',
            columns: [
              [
                {
                  type: 'text',
                  text: 'Início da formação dos tecidos duros',
                },
                {
                  type: 'text',
                  text: 'Esmalte completo',
                },
                {
                  type: 'text',
                  text: 'Erupção',
                },
                {
                  type: 'text',
                  text: 'Raiz Completa'
                },
              ],
              [
                {
                  type: 'text',
                  text: '3-4 meses',
                },
                {
                  type: 'text',
                  text: '4-5 anos',
                },
                {
                  type: 'text',
                  text: '7-8 anos',
                },
                {
                  type: 'text',
                  text: '10 anos'
                },
              ]
            ]
          }
        ]
      }
    ]
  }
}