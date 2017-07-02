import externalAnatomy from './external-anatomy'
import internalAnatomy from './internal-anatomy'

export default {
  name: 'IncisoCentralSuperior',
  route: 'AnatomySelector',
  params: {
    pageName: 'Inciso Central Superior',
    externalAnatomy,
    internalAnatomy
  }
}