import React, { Component } from 'react';
import Contatos from '../components/contatos';
import Botoes from '../components/botoes';
import Wave from '../components/imagens/bgWave.svg';

const waveCss = {
    width: '100%',
    height: 'auto',
    transform: 'translate(0,50%)',
    position: 'absolute',
    bottom: '45px',
    objectFit: 'cover',
    zIndex: '0'
  };

class Contato extends Component {
    render() {
        return (
            <div>
                <Contatos icone='contatos' gradiente='bgContato'></Contatos>
                <Botoes linkAnterior='/habilidades' linkProximo='/'></Botoes>
                <img id='wave' style={waveCss} src={Wave}></img>
            </div>
        );
    }
}

export default Contato;