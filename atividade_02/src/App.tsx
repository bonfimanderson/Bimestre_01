import React from "react";
import Evento from "./components/Evento";
import TipoIngresso from "./components/TipoIngresso";
import './App.css'

export default function App() {
  return (
    <div className="conteiner" >
    <Evento cidade="Campina Grande /PR" data="02 De Agosto De 2019 Sexta Feira" genero="Arte em forma de sertanejo" horario="18:30 as 00:00" local="Parque do povo" nome="Gustavo Lima e você"/>
    <TipoIngresso tipoIngresso="Camarote" valor="150,00"/> 
    
      </div>
  );
}
