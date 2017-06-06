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
              value: 'vestibular'
            },
            {
              name: 'Lingual',
              value: 'lingual'
            },
            {
              name: 'Mesial',
              value: 'mesial'
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