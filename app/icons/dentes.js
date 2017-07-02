import React, { Component } from 'react'
import Svg, { G } from 'react-native-svg';

import IncisivoFrontalDireito from './dentes-superiores/incisivo-frontal-direito'
import incisivoLateralDireito from './dentes-superiores/incisivo-lateral-direito'
import caninoDireito from './dentes-superiores/canino-direito'
import primeiroPreMolarDireito from './dentes-superiores/primeiro-pre-molar-direito'
import segundoPreMolarDireito from './dentes-superiores/segundo-pre-molar-direito'
import PrimeiroMolarDireito from './dentes-superiores/primeiro-molar-direito'
import segundoMolarDireito from './dentes-superiores/segundo-molar-direito'
import terceiroMolarDireito from './dentes-superiores/terceiro-molar-direito'

import IncisivoFrontalEsquerdo from './dentes-superiores/incisivo-frontal-esquerdo'
import incisivoLateralEsquerdo from './dentes-superiores/incisivo-lateral-esquerdo'
import caninoEsquerdo from './dentes-superiores/canino-esquerdo'
import primeiroPreMolarEsquerdo from './dentes-superiores/primeiro-pre-molar-esquerdo'
import segundoPreMolarEsquerdo from './dentes-superiores/segundo-pre-molar-esquerdo'
import primeiroMolarEsquerdo from './dentes-superiores/primeiro-molar-esquerdo'
import segundoMolarEsquerdo from './dentes-superiores/segundo-molar-esquerdo'
import terceiroMolarEsquerdo from './dentes-superiores/terceiro-molar-esquerdo'

import incisivoFrontalDireitoInferior from './dentes-inferiores/incisivo-frontal-direito'
import incisivoLateralDireitoInferior from './dentes-inferiores/incisivo-lateral-direito'
import caninoDireitoInferior from './dentes-inferiores/canino-direito'
import primeiroPreMolarDireitoInferior from './dentes-inferiores/primeiro-pre-molar-direito'
import segundoPreMolarDireitoInferior from './dentes-inferiores/segundo-pre-molar-direito'
import primeiroMolarDireitoInferior from './dentes-inferiores/primeiro-molar-direito'
import segundoMolarDireitoInferior from './dentes-inferiores/segundo-molar-direito'
import terceiroMolarDireitoInferior from './dentes-inferiores/terceiro-molar-direito'

import incisivoFrontalEsquerdoInferior from './dentes-inferiores/incisivo-frontal-esquerdo'
import incisivoLateralEsquerdoInferior from './dentes-inferiores/incisivo-lateral-esquerdo'
import caninoEsquerdoInferior from './dentes-inferiores/canino-esquerdo'
import segundoPreMolarEsquerdoInferior from './dentes-inferiores/segundo-pre-molar-esquerdo'
import primeiroPreMolarEsquerdoInferior from './dentes-inferiores/primeiro-pre-molar-esquerdo'
import primeiroMolarEsquerdoInferior from './dentes-inferiores/primeiro-molar-esquerdo'
import segundoMolarEsquerdoInferior from './dentes-inferiores/segundo-molar-esquerdo'
import terceiroMolarEsquerdoInferior from './dentes-inferiores/terceiro-molar-esquerdo'

export default class Dentes extends Component {

  render() {
    const { 
      incisoCentralSuperior,
      primeiroMolarInferior
    } = this.props.teethData

    return (
      <Svg xmlns="http://www.w3.org/2000/svg"
        width="300"
        height="500"
        viewBox="0 0 3026.986 4735.713">
        <G
          stroke="#707070"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round">

          <IncisivoFrontalDireito {...incisoCentralSuperior} />
          { incisivoLateralDireito() }
          { caninoDireito() }
          { primeiroPreMolarDireito() }
          { segundoPreMolarDireito() }
          <PrimeiroMolarDireito {...primeiroMolarInferior} />
          { segundoMolarDireito() }
          { terceiroMolarDireito() }

          <IncisivoFrontalEsquerdo {...incisoCentralSuperior} />
          { incisivoLateralEsquerdo() }
          { caninoEsquerdo() }
          { primeiroPreMolarEsquerdo() }
          { segundoPreMolarEsquerdo() }
          { primeiroMolarEsquerdo() }
          { segundoMolarEsquerdo() }
          { terceiroMolarEsquerdo() }

          { incisivoFrontalDireitoInferior() }
          { incisivoLateralDireitoInferior() }
          { caninoDireitoInferior() }
          { primeiroPreMolarDireitoInferior() }
          { segundoPreMolarDireitoInferior() }
          { primeiroMolarDireitoInferior() }
          { segundoMolarDireitoInferior() }
          { terceiroMolarDireitoInferior() }


          { incisivoFrontalEsquerdoInferior() }
          { incisivoLateralEsquerdoInferior() }
          { caninoEsquerdoInferior() }
          { primeiroPreMolarEsquerdoInferior() }
          { segundoPreMolarEsquerdoInferior() }
          { primeiroMolarEsquerdoInferior() }
          { segundoMolarEsquerdoInferior() }
          { terceiroMolarEsquerdoInferior() }
          </G>
      </Svg>
    )
  }
}