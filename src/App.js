import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom"; 
import Cliente from "./Components/Cliente";
import Emails from "./Components/Emails";
import Menu from "./Components/Menu";
import Navegacion from "./Components/Navegacion";
import Productos from "./Components/Productos";
import Pedidos from "./Components/Pedidos";
import Inicio from './Components/inicio';
import View from './common/View';

class App extends Component {
  render() {
    return (

      <div>
        <Menu />
        <br />
        <Navegacion />
        <div className="container">
            <Switch>
              <Route path="/inicio" component={Inicio}/>
              <Route path="/Cliente" component = {Cliente}/>
              <Route path="/Productos" component = {Productos}/>
              <Route path="/Emails" component = {Emails}/>
              <Route path="/Pedidos" component= {Pedidos}/>
            </Switch>
        </div>
      
        
      </div>
    );
  }
}

export default App;
