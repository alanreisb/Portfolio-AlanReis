import React, { Component } from 'react';


const tituloContainerCss = {

    width:'100%',
    marginTop:'8vh',
    marginBottom:'8vh',
    marginLeft:'auto',
    marginRight:'auto',
    textAlign:'center',
    
     alignContent:'center'
    

    
};

const tituloCss = { 
    whiteSpace: 'pre-wrap', 
    textAlign: 'center', 
    
    fontSize:'26pt',
    fontFamily: 'Cormorant Garamond, serif' ,
    lineHeight:'1',
    letterSpacing:'0.5px',
    color:'#e6e9ed',
    mixBlendMode: 'lighten',
    fontWeight:'700'
    
   };


    


//Classe
class Titulo extends Component {
    render() {

        return (
            <div style={tituloContainerCss}  >
              <text style={tituloCss} > Alan Reis </text><br/>
              <text style={tituloCss} > Desenvolvedor</text><br/>
              <text style={tituloCss} > Front-end</text>
            </div>
        );
    }
}
export default Titulo;