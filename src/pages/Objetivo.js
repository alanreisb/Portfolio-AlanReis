import React, { Component } from 'react';
import Textual from '../components/textual';
import Botoes from '../components/botoes';

class Objetivo extends Component {
    render() {
        return (
            <div>
                <Textual titulo='Objetivo' texto={<text>{`Colaborar com uma equipe focada no desenvolvimento web ou mobile. Agregando valor a mesma. \n\nPodendo me especializar cada vez mais nas áreas de UI e UX.`}</text>} gradiente='bgObjetivo' icone='objetivo'>

                </Textual>

                <Botoes linkAnterior='/apresentacao' linkProximo='/habilidades'></Botoes>
            </div>
        );
    }
}

export default Objetivo;