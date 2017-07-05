import externalAnatomy from './external-anatomy'
import internalAnatomy from './internal-anatomy'
import access from './access'
import prepQuimicoMecanico from './preparamento_quimico_mecanico'

export default {
  name: 'IncisoCentralSuperior',
  route: 'AnatomySelector',
  params: {
    pageName: 'Inciso Central Superior',
    externalAnatomy,
    internalAnatomy,
    access,
    prepQuimicoMecanico
  }
}