import React, { Component } from 'react';
import fbIcon from './imagens/icons/fb_icon.png';
import linkedinIcon from './imagens/icons/linkedin_icon.png';
import wpIcon from './imagens/icons/wp_icon.png';

const barraClasses = 'position-absolute float-right  p-0  rounded navbar navbar-expand row';
const barraCss = {
    right: '0',
    margin:'0',
    bottom:'5em'

};
const ulClasses = 'navbar-nav mr-2 mt-2';
const liClasses = 'nav-item float-left p-1';


const imgCss = {
    width: 'auto',
    height:'5vh',

};

const btnClasses = 'bg-transparent';


class barraContatos extends Component {
    render() {
        return (
            <nav className={barraClasses} style={barraCss}>
                <ul className={ulClasses}> 
                    <li className={liClasses}><button className={btnClasses}><img style={imgCss}src={fbIcon} /></button></li>
                    <li className={liClasses}><button className={btnClasses}><img style={imgCss}src={linkedinIcon} /></button></li>
                    <li className={liClasses}><button className={btnClasses}><img style={imgCss}src={wpIcon} /></button></li>
                    
               
                </ul>
            </nav>
        );
    }
}

export default barraContatos;