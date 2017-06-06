export default {
  name: 'anatomia',
    route: 'Anatomy',
    params: {
      pageName: 'Anatomia',
      buttons: [
        {
          name: 'faces',
          picker: [
            {
              name: 'Vestibular',
              value: 'Tem o formato trapedoizal, sendo o lado cervical menor e o lado oclusal maior A superfície da face vestibular é totalmente convexa. Apresentam dois sulcos verticais, sendo o mesial mais prolongado, chegando a atingir o terço médio da coroa, determinando o forame cego. Pode apresentar o tubérculo de Zuckerckandl'
            },
            {
              name: 'Lingual',
              value: 'Apresenta 2 cúspides que são separadas entre si pelo          sulcovestíbulo-lingual; O lado proximal mesial é mais alto que o distal.'
            },
            {
              name: 'Mesial',
              value: 'Possui formato pentagonal. Apresenta 5 cúspides (3 vestibulares, 2 linguais) A cúspide mésio vestibular é a mais volumosa e a mais alta. Os lados proximais são retilíneos'
            },
            {
              name: 'Distal',
              value: 'distal'
            },
            {
              name: 'Oclusal',
              value: 'oclusal'
            }
          ]
        },
        {
          name: 'dimensões',
          picker: [
            {
              name: 'Numero de Raízes',
              value: 'num_raiz'
            },
            {
              name: 'Tamanho da coroa',
              value: 'tam_coroa'
            },
            {
              name: 'Comprimento',
              value: 'comprimento'
            }
          ]
        },
        {
          name: 'desenvolvimento dentário',
          picker: [
          ]
        }
      ]
    }
}