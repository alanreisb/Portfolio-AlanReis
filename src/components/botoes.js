import React, { Component } from 'react';

import Seta from '../components/imagens/botao/seta.svg';

const botaoClasse =
  'btn  rounded-circle  position-absolute '
  ;
const botaoCss = {
  width: '40px',
  height: '40px',
  right: '50px',
  top: '90%',
  zIndex: '4',
  backgroundColor: 'transparent'



};


const primeirobotaoCss = {
  width: '40px',
  height: '40px',
  right: '100px',
  top: '90%',
  zIndex: '3',
  transform: 'rotate(180deg)',
  backgroundColor: 'transparent'
}

class botoes extends Component {
    render() {
        return (
            <div>
                
                <a href={this.props.linkAnterior}><button class={`${botaoClasse}  `} style={primeirobotaoCss}> <img src={Seta}></img></button></a>

        <a href={this.props.linkProximo}><button class={`${botaoClasse}  `} style={botaoCss}>  <img src={Seta} ></img></button></a>

            </div>
        );
    }
}

export default botoes;