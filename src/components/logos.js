import React, { Component } from 'react';
import logoReact from './imagens/logos/react.png';
import logoJquery from './imagens/logos/jquery.png';
import logoCsharp from './imagens/logos/csharp.png';
import logoNode from './imagens/logos/nodejs.png';


//Estilização 
const logosCss = {
    paddingBottom:'10px',
    bottom:'0',
    margin:'0',
    verticalAlign:'middle',
    
}
const logosUlCss = {
    listStyle: 'none',
    margin:'0',
    marginLeft:'15%',
    height:'100%',
        
}
const liCss = {

    float: 'left',
    padding:'0',
    margin:'0'
   
}
const imgCss = {
    height: '50px'

}
//Classe
class Logos extends Component {
    render() {

        return (
          
                <div id='logos' style={logosCss} className='rounded  border-light'>
                    <ul style={logosUlCss} className='d-flex'>
                        <li className='flex-fill' style={liCss}><img style={imgCss} src={logoReact} /></li>
                        <li className='flex-fill'  style={liCss}><img style={imgCss} src={logoJquery} /></li>
                        <li className='flex-fill'  style={liCss}><img style={imgCss} src={logoNode} /></li>
                        <li className='flex-fill'   style={liCss} ><img style={imgCss} src={logoCsharp} /></li>
                    </ul>

                </div>


            
        );
    }
}
export default Logos;