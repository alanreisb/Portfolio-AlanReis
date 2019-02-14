import React, { Component } from 'react';
import Textual from '../components/textual';
import Botoes from '../components/botoes';




class Apresentacao extends Component {
  render() {
    return (
      <div>
        <Textual titulo='Apresentação' texto={<text>{`Profissional de desenvolvimento web focado na composição de componentes assíncronos e sem perda de perfomance. \n\nUtilizando tecnologias como ReactJs, Jquery,  Angular 6, entre outras plataformas. Buscando sempre acompanhar as tendências atuais  em UI/UX.`}</text>} gradiente='bgApresentacao' icone='apresentacao' >

        </Textual>
        <Botoes linkAnterior='/' linkProximo='/objetivo'></Botoes>

      </div>
    );
  }
}

export default Apresentacao;