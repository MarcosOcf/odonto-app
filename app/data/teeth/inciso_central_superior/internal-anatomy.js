const canalRadicular = require('../../../assets/inciso-central-superior/canal_radicular.png')
const dimensoes2 = require('../../../assets/inciso-central-superior/dimensoes2_inciso_frontal.png')
const topografia = require('../../../assets/inciso-central-superior/topografia.png')
const ramificacoes = require('../../../assets/inciso-central-superior/ramificacoes.png')
const forame = require('../../../assets/inciso-central-superior/forame.png')

export default {
  tabName: 'Anatomia Interna',
  params: {
    buttons: [
      {
        name: 'Canal Radicular',
        params: [
          {
            type: 'imageSource',
            imageSources: [
              {
                source: canalRadicular,
                width: 350,
                height: 180
              }
            ],
          },
          {
            type: 'table',
            columns: [
              [
                null,
                {
                  type: 'text',
                  text: 'Raiz',
                },
                {
                  type: 'text',
                  text: 'Canal',
                },
              ],
              [
                {
                  type: 'text',
                  text: 'Quantidade',
                },
                {
                  type: 'text',
                  text: '1',
                },
                {
                  type: 'text',
                  text: '1',
                },
              ]
            ]
          },
          {
            type: 'table',
            columns: [
              [
                null,
                {
                  type: 'text',
                  text:'Reta',
                },
                {
                  type: 'text',
                  text:'Curvatura Apical Vestibular',
                },
                {
                  type: 'text',
                  text:'Curvatura Apical distal',
                },
                {
                  type: 'text',
                  text:'Curvatura Apical mesial',
                },
                {
                  type: 'text',
                  text:'Curvatura Apical paratina',
                },
              ],
              [
                {
                  type: 'text',
                  text:'Direção da raiz em %',
                },
                {
                  type: 'text',
                  text:'75,0',
                },
                {
                  type: 'text',
                  text:'9,3',
                },
                {
                  type: 'text',
                  text:'7,8',
                },
                {
                  type: 'text',
                  text:'4,3',
                },
                {
                  type: 'text',
                  text:'3,6',
                }
              ]
            ]
          }
        ]
      },
      {
        name: 'Topografia',
        params: [
          {
            type: 'imageSource',
            imageSources: [
              {
                source: topografia,
                width: 350,
                height: 180
              }
            ]
          },
          {
            type: 'table',
            columns: [
              [
                {
                  type: 'text',
                  text:'Camara coronária',
                },
                {
                  type: 'text',
                  text:'Terço apical',
                },
                {
                  type: 'text',
                  text:'Terço médio',
                },
                {
                  type: 'text',
                  text:'Terço cervical',
                }
              ],
              [
                {
                  type: 'text',
                  text:'Achatada no sentido V/L',
                },
                {
                  type: 'text',
                  text:'Circular',
                },
                {
                  type: 'text',
                  text:'Ovalada, com o lado maior para a vestibular',
                },
                {
                  type: 'text',
                  text:'Cônica triangular, com base para a vestibular' 
                }
              ]
            ]
          },
          {
            type: 'table',
            columns: [
              [
                null,
                null,
                {
                  type: 'text',
                  text:'Vestíbulo lingual',
                },
                {
                  type: 'text',
                  text:'mesiodistal',
                }
              ],
              [
                {
                  type: 'text',
                  text:'Diâmetro médio do canal',
                },
                {
                  type: 'text',
                  text:'Em 1mm do ápice',
                },
                {
                  type: 'text',
                  text:'0,34',
                },
                {
                  type: 'text',
                  text:'0,30'
                }
              ],
              [
                null,
                {
                  type: 'text',
                  text:'Em 3mm do ápice',
                },
                {
                  type: 'text',
                  text:'0,47',
                },
                {
                  type: 'text',
                  text:'0,36'
                },
              ]
            ]
          }
        ],
      },
      {
        name: 'Ramificações',
        params: [
          {
            type: 'imageSource',
            imageSources: [
              {
                source: ramificacoes,
                width: 320,
                height: 400
              }
            ]
          }
        ]        
      },
      {
        name: 'Forame',
        params: [
          {
            type: 'imageSource',
            imageSources: [
              {
                source: forame,
                width: 320,
                height: 400
              }
            ]
          },
          {
            type: 'table',
            columns: [
              [
                {
                  type: 'text',
                  text:'O forame apical distancia-se do ápice radicular entre 0,5 à 3,0mm'
                },
              ]
            ]
          }
        ]
      }
    ]
  }
}