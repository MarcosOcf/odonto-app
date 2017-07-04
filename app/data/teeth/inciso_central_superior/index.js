import externalAnatomy from './external-anatomy'
import internalAnatomy from './internal-anatomy'
import access from './access'

export default {
  name: 'IncisoCentralSuperior',
  route: 'AnatomySelector',
  params: {
    pageName: 'Inciso Central Superior',
    externalAnatomy,
    internalAnatomy,
    access
  }
}