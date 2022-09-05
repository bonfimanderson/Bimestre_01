import React from "react";
import './styles.css'

//nome, data, horario, local, cidade e genero.

interface Eventoprops {
    nome: string;
    data: string;
    horario: string;
    local: string;
    cidade: string;
    genero : string;
}
export default function Evento ({nome,data,horario,local,cidade,genero}:Eventoprops){
    return (
        <div>
<text>{nome}</text>
<div>

<text className="texto">Data: {data}</text>
</div>
<text>horario: {horario}</text>
<text>local: {local}</text>
<text>cidade: {cidade}</text>
<text>genero: {genero}</text>
<text>genero: {genero}</text>
        </div>
    )
}