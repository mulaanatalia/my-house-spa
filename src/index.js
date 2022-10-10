import React from 'react'; //importação do módulo principal do react
import ReactDOM from 'react-dom'; //para exibir o nosso DOM
import './index.css';
import App from './components/App'; //Módulo principal do nosso sistema

ReactDOM.render(
    <App />, //Os módulos são escritos como se fossem uma tag html
    document.getElementById("root") //tudo que for renderizado no sistema, será renderizado dentro da id root
);