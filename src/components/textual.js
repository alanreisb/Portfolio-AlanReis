import React, { Component } from 'react';
import Wave from './imagens/bgWave.svg';
import Seta from './imagens/botao/seta.svg';

 
const waveCss = {
  width: '100%',
  height: 'auto',
  transform: 'translate(0,50%)',
  position: 'absolute',
  bottom: '0',
  objectFit: 'cover'
}

const cardCss = {
  zIndex: '2',

}

const iconeCss = {
  right: '50px',
  top:'5%',
  position:'absolute',
  width:'80px',
  height:'auto'
}



const cardBodyCss = {
  paddingLeft: '7%',
  paddingRight: '15%',
  marginTop: '100px',
 


};
const tituloClasse = 'card-title text-light pl-3 pr-3 rounded text-left mt-0 mb-0 pt-0 pb-0';

const textoClasse = 'card-text text-light text-left p-3';
const textoCss = {
  lineHeight: '1.5',
  fontFamily: 'Cormorant Garamond, serif',
  fontWeight: '600',
  fontSize: '14pt',
  margin:'0',
  whiteSpace:'pre-wrap'
};
const botaoClasse = 
  'btn  rounded-circle  position-absolute '
;
const botaoCss = {
  width: '40px',
  height: '40px',
  right: '20px',
  top: '90%',
  zIndex: '3' ,

  
  

};

const primeirobotaoCss ={
  width: '40px',
  height: '40px',
  right: '70px',
  top: '90%',
  zIndex: '3' ,
  transform:'rotate(180deg)'
}

class Textual extends Component {
  render() {
    return (
      <div class={`card shadow h-100 w-100 position-absolute ${this.props.gradiente}`} style={cardCss} >
      <img src={require('./imagens/iconespagina/' + this.props.icone +'.svg')} style={iconeCss}></img>
        <div class="card-body " style={cardBodyCss} >

          <h5 class={tituloClasse}>{this.props.titulo} </h5>
          <p class={textoClasse} style={textoCss}>{this.props.texto}</p>

        </div>


      


      </div>


    );
  }
}

export default Textual;