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
                'Raiz',
                'Canal',
              ],
              [
                'Quantidade',
                '1',
                '1'
              ]
            ]
          },
          {
            type: 'table',
            columns: [
              [
                null,
                'Reta',
                'Curvatura Apical Vestibular',
                'Curvatura Apical distal',
                'Curvatura Apical mesial',
                'Curvatura Apical paratina',
              ],
              [
                'Direção da raiz em %',
                '75,0',
                '9,3',
                '7,8',
                '4,3',
                '3,6',
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
                'Camara coronária',
                'Terço apical',
                'Terço médio',
                'Terço cervical',
              ],
              [
                'Achatada no sentido V/L',
                'Circular',
                'Ovalada, com o lado maior para a vestibular',
                'Cônica triangular, com base para a vestibular' 
              ]
            ]
          },
          {
            type: 'table',
            columns: [
              [
                null,
                null,
                'Vestíbulo lingual',
                'mesiodistal',
              ],
              [
                'Diâmetro médio do canal',
                'Em 1mm do ápice',
                '0,34',
                '0,30'
              ],
              [
                null,
                'Em 3mm do ápice',
                '0,47',
                '0,36'
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
                'O forame apical distancia-se do ápice radicular entre 0,5 à 3,0mm'
              ]
            ]
          }
        ]
      }
    ]
  }
}