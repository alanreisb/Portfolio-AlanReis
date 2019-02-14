import React, { Component } from 'react';
import Wave from './imagens/bgWave.svg';
import Seta from './imagens/botao/seta.svg';
import iFacebook from './imagens/icons/fb_icon.png';
import iLinkedin from './imagens/icons/linkedin_icon.png';
import iWhatsapp from './imagens/icons/wp_icon.png';
import iGithubb from './imagens/icons/github.svg';

const waveCss = {
    width: '100%',
    height: 'auto',
    transform: 'translate(0,50%)',
    position: 'absolute',
    bottom: '0',
    objectFit: 'cover',
    left: '0',
    zIndex:'2'
}
const iconeCss = {
    right: '50px',
    top:'5%',
    position:'absolute',
    width:'80px',
    height:'auto'
  }
  

const tituloClasse = ' text-light pl-3 pr-3 rounded text-left mt-0 mb-0 pt-0 pb-0 ';

const tituloCss = {

    position: 'absolute',
    top: '15%',
    marginBot: '3%',

}

const contatosCss = {
    backgroundColor: '#0094FF',
    zIndex: '2',
    width: '100%',
    height: '100%',
    position: 'absolute'

};

const barraCss = {
    clear: 'both',
    borderRadius: '0px 15px 15px 0px',
    verticalAlign: 'middle',
    padding: '10px',
    zIndex:'5'

};

const espacoCss = {
    height: '18%'
}

const barraClasse = " float-left bg-light mb-3";

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

const logoCss = {
    height:'40px',
    
}

class contatos extends Component {
    render() {
        return (
            <div style={contatosCss}>
                <img src={require('./imagens/iconespagina/' + this.props.icone + '.svg')} style={iconeCss}></img>
                <div className='clearfix p-3'></div>
                <div id='titulo' style={tituloCss}>
                    <h5 className={tituloClasse}>Contatos </h5>
                </div>

                <div style={espacoCss}></div>
                <div className={barraClasse} style={barraCss}>
                 <img src={iFacebook} style={logoCss}></img><a className='ml-2' href='https://www.facebook.com/devalanreis'> https://www.facebook.com/devalanreis</a>
    
                </div>

                <div className={barraClasse} style={barraCss}>
                    <img src={iLinkedin} style={logoCss}></img><a className='ml-2' href='https://www.linkedin.com/in/alanreisb'>https://www.linkedin.com/in/alanreisb</a>
                </div>
                <div className={barraClasse} style={barraCss}>
                  <img src={iGithubb} style={logoCss}></img>  <a  href='https://www.github.com/alanreisb'>https://www.github.com/alanreisb</a>
                </div>

                <div className={barraClasse} style={barraCss}>
                  <img src={iWhatsapp} style={logoCss}></img>  <a href='(12)98250-1585' className='ml-2'>(12)98250-1585</a>
                </div>
               
                
            </div>
        );
    }
}

export default contatos;