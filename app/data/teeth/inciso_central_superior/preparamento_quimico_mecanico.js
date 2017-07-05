const instrumental = require('../../../assets/inciso-central-superior/prep-quim-instrumental.png')
const caixaEndodontica = require('../../../assets/inciso-central-superior/caixa-endodontica.png')
const bancadaDeProcedimentos = require('../../../assets/inciso-central-superior/bancada-de-procedimentos.png')
const cdr = require('../../../assets/inciso-central-superior/cdr.png')
const cateterismo1 = require('../../../assets/inciso-central-superior/cateterismo1.png')
const cateterismo2 = require('../../../assets/inciso-central-superior/cateterismo2.png')
const odontometria = require('../../../assets/inciso-central-superior/odontometria.png')
const cervical = require('../../../assets/inciso-central-superior/cervical.png')
const apical = require('../../../assets/inciso-central-superior/apical.png')
const batenteApical = require('../../../assets/inciso-central-superior/batente_apical.png')
const refinamento = require('../../../assets/inciso-central-superior/refinamento.png')
const iai = require('../../../assets/inciso-central-superior/iai.png')

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
      {
        name: 'CDR',
        params: [
          {
            type: 'text',
            text: 'A partir do Comprimento do Dente Radiografado (CDR) é definido o Comprimento de Trabalho Provisório (CTP).'
          },
          {
            type: 'text',
            text: 'CTP = CDR – 2mm'
          },
          {
            type: 'imageSource',
            imageSources: [
              {
                source: cdr,
                width: 230,
                height: 230
              }
            ],
          }
        ]
      },
      {
        name: 'Cateterismo',
        params: [
          {
            type: 'table',
            columns: [
              [
                {
                  type: 'text',
                  text: 'Preencher a câmara pulpar com 2mL de hipoclorito de sódio antes de iniciar o cateterismo.'
                },
                {
                  type: 'imageSource',
                  imageSources: [
                    {
                      source: cateterismo1,
                      width: 100,
                      height: 330
                    }
                  ],
                },
              ],
              [
                {
                  type: 'text',
                  text: 'Para canal amplo usar lima Kerr de aço 10 ou 15, no atresiado 6 ou 10, realizando os movimentos 1-2-3 até o CTP.'
                },
                {
                  type: 'imageSource',
                  imageSources: [
                    {
                      source: cateterismo2,
                      width: 100,
                      height: 330
                    }
                  ],
                }
              ]
            ]
          },
        ]
      },
      {
        name: 'Odontometria',
        params: [
          {
            type: 'text',
            text: 'Com a lima (acima de 15) que se prender na medida estimada realizar radiografia.'
          },
          {
            type: 'text',
            text: 'Na radiografia medir a distância da coroa até a extremidade da lima, a qual será o Comprimento de Patência do Canal (CPC), que definirá o Comprimento de Trabalho (CT).'
          },
          {
            type: 'text',
            text: 'CT = CPC – 1mm'
          },
          {
            type: 'imageSource',
            imageSources: [
              {
                source: odontometria,
                width: 230,
                height: 230
              }
            ],
          }
        ]
      },
      {
        name: 'Cervical',
        params: [
          {
            type: 'text',
            text: 'Preparar o segmento cervical até 2/3 do CPC.'
          },
          {
            type: 'text',
            text: 'Primeiramente usar lima Kerr 55.'
          },
          {
            type: 'text',
            text: 'Após, usar Gattes 2, 3 e Largo 1 e 2.'
          },
          {
            type: 'imageSource',
            imageSources: [
              {
                source: cervical,
                width: 230,
                height: 230
              }
            ],
          }
        ]
      },
      {
        name: 'Apical',
        params: [
          {
            type: 'text',
            text: 'Usar limas Kerr em ordem decrescente no sentido coroa-ápice até o CT com movimento de rotação alternada.'
          },
          {
            type: 'imageSource',
            imageSources: [
              {
                source: apical,
                width: 230,
                height: 230
              }
            ],
          }
        ]
      },
      {
        name: 'Batente apical',
        params: [
          {
            type: 'text',
            text: 'Usar 2 limas Kerr acima da última lima de instrumentação (Lima Memória) até o CT com movimento de rotação alternada.'
          },
          {
            type: 'text',
            text: 'No caso de canais curvos, utilizar instrumentos Flex File ou de Níquel-Titânio (Ni-Ti).'
          },
          {
            type: 'imageSource',
            imageSources: [
              {
                source: batenteApical,
                width: 230,
                height: 230
              }
            ],
          }
        ]
      },
      {
        name: 'Refinamento',
        params: [
          {
            type: 'text',
            text: 'Com lima Hedströem com 2 números acima da Lima Memória até 2 mm aquém do CT com movimento de limagem 1-2.'
          },
          {
            type: 'imageSource',
            imageSources: [
              {
                source: refinamento,
                width: 230,
                height: 230
              }
            ],
          }
        ]
      },
      {
        name: 'IAI',
        params: [
          {
            type: 'text',
            text: 'A cada troca de instrumento realizar:'
          },
          {
            type: 'text',
            text: 'a patência foraminal com lima Kerr 10 ou 15 a'
          },
          {
            type: 'text',
            text: 'Irrigação com hipoclorito de sódio'
          },
          {
            type: 'text',
            text: 'Aspiração da substância química'
          },
          {
            type: 'text',
            text: 'Inundação da câmara pulpar com hipoclorito de sódio (IAI)'
          },
          {
            type: 'imageSource',
            imageSources: [
              {
                source: iai,
                width: 230,
                height: 230
              }
            ],
          }
        ]
      },
    ]
  }
}