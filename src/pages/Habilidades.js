import React, { Component } from 'react';
import Tabela from '../components/tabela';
import Botoes from '../components/botoes';

class Habilidades extends Component {
    render() {
        return (
            <div>
                <Tabela titulo='Habilidades e Conhecimentos' gradiente='bgHabilidades' texto='asd' icone='habilidades'>
                    <ul class='col-sm pl-0'><u>Front-End</u>
                        <li class='mt-2'>HTML, CSS e Javascript</li>
                        <li>ReactJs</li>
                        <li>Gulp</li>
                        <li>Jquery</li>
                        <li>Typescript</li>
                    </ul>

                    <ul class='col-sm pl-0'><u>Back-End</u>
                        <li class='mt-2'>NodeJs</li>
                        <li>Asp.NET</li>

                    </ul>


                </Tabela>
                <Botoes linkAnterior='/objetivo' linkProximo='/contato'></Botoes>
            </div>
        );
    }
}

export default Habilidades;