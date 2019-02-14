import React, { Component } from 'react';

const navClasse="nav p-2 rounded bg-transparent d-flex";
const navCss = {top:'0%',position:'absolute',width:'100%',zIndex:'0', margin:'0', padding:'0'};
const liClasse = "nav-item  text-center  rounded flex-fill";
const liCss = {transition:'3s background-color ease-in',fontSize:'80%',fontWeight:'bolder', color:'black'}
const menuLinkClasse = "nav-link  border-right text-dark ";
const menuLinkClasseUltima = "nav-link text-dark ";
const linkCss = {
  color:'silver',
  fontWeight:'bold'
}

class Menu extends Component {
    render() {

        return (
          
                 <ul id="Menu-Nav" class={navClasse} style={navCss} >
              <li class={liClasse} style={liCss}>
                <a class={menuLinkClasse } style={linkCss} href="/apresentacao">Apresentação</a>
              </li>
              <li class={liClasse} style={liCss}>
                <a class={menuLinkClasse} style={linkCss}  href="/objetivo">Objetivo</a>
              </li>
              <li class={liClasse} style={liCss}>
                <a class={menuLinkClasse} style={linkCss} href="/habilidades">Habilidades</a>
              </li>
              <li class={liClasse} style={liCss}>
                <a class={menuLinkClasseUltima} style={linkCss} href="/contato">Contatos</a>
              </li>
            </ul>

            
        );
    }
}
export default Menu;