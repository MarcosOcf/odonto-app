import React, { Component } from 'react'
import Svg, { G, Path } from 'react-native-svg';

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
        width="350"
        height="500"
        viewBox="0 0 3026.986 4735.713">
        <G
          stroke="#707070"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round">

          <G fill='#991111' fillOpacity="0.15" stroke="#979797">
            <Path d="M604.892446,2479.48476 C604.892446,2479.48476 866.064654,4120.86496 1500.23812,4120.86496 C2134.41159,4120.86496 2395.5838,2479.48476 2395.5838,2479.48476" stroke-width="13"></Path>
            <Path d="M1507.55439,2514.6211 L1507.94306,3302.74013" stroke-width="2"></Path>
            <Path d="M111.967297,2453.21841 C111.967297,2453.21841 12.5755868,2207.33818 28.6895781,2092.96681 C109.422448,1519.95366 247.198502,0.740247665 1511.55775,0.740247665 C2772.83439,0.740247665 2896.48578,1571.97329 2971.47234,2092.96681 C2988.06217,2208.2301 2896.26243,2445.50251 2896.26243,2445.50251" stroke-width="8"></Path>
            <Path d="M109.378379,2436.9871 C109.378379,2436.9871 195.132591,4630.61288 1509.78,4630.61288 C2824.4274,4630.61288 2897.18198,2436.9871 2897.18198,2436.9871" stroke-width="7"></Path>
          </G>
          
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