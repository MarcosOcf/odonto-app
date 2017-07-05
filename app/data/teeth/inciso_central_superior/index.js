import externalAnatomy from './external-anatomy'
import internalAnatomy from './internal-anatomy'
import access from './access'
import prepQuimicoMecanico from './preparamento_quimico_mecanico'
import medicacaoIntracanal from './medicacao-intracanal'
import obturacao from './obturacao'

export default {
  name: 'IncisoCentralSuperior',
  route: 'AnatomySelector',
  params: {
    pageName: 'Inciso Central Superior',
    externalAnatomy,
    internalAnatomy,
    access,
    prepQuimicoMecanico,
    medicacaoIntracanal,
    obturacao
  }
}