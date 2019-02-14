import React, { Component } from 'react';
import FotoPerfil from './imagens/FotoPerfil.jpg';
import { generateKeyPairSync } from 'crypto';


const fotoContainerCss = {
    width: '30vh',
    height:'auto',
    margin:'auto',
    marginTop: '22vh',
    verticalAlign: 'middle',
    alignContent: 'center',
    transform: 'translateX(10px)'
    
    
}
const fotoCss = {
        
        margin:'0',
        height: '100%',
        width:'100%',
        
        
}

class foto extends Component {
    render() {
        return (
            <div style={fotoContainerCss} className=''>
              <img src={FotoPerfil} style={fotoCss} id='perfil' className='rounded-circle ' />  
            </div>
        );
    }
}

export default foto;