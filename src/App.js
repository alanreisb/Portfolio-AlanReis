/*Core*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import './App.css';
/*Scripts*/
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Barba from 'barba.js';
/*Pages*/
import Apresentacao from './pages/Apresentacao';
import Objetivo from './pages/Objetivo';
import Habilidades from './pages/Habilidades';
import Contato from './pages/Contato';
/*Componentes*/
import Logos from './components/logos';
import Menu from './components/menu';
import Titulo from './components/titulo';
import Foto from './components/foto';
import BarraContatos from './components/barra-contatos';

class App extends Component {
  render() {

    return (
      <div className="App">
        <link href={Bootstrap} rel="stylesheet" />
        <script src={Barba} rel="text/javascript" />
        <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond" rel="stylesheet" />
        <Router>
          <Switch>
            <Route path="/apresentacao" component={Apresentacao} />
            <Route path="/objetivo" component={Objetivo} />
            <Route path="/habilidades" component={Habilidades} />
            <Route path="/contato" component={Contato} />
          </Switch>
        </Router>

        <div id='conteudo'>
          <section id='Menu-Principal' className='secao'>
            
            <Menu></Menu>
            
            <div style={{ height: '5%' }} ></div>
           
            <Foto></Foto>
            <Titulo></Titulo>
            <BarraContatos></BarraContatos>
            <div style={{clear:'right'}}></div>
            <Logos></Logos>
            
          </section>
        </div>

        
      </div>
    );
  }
}

export default App;