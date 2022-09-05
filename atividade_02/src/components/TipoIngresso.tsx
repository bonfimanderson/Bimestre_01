import React from "react";

//tipoIngresso, valor, horario, local, cidade e genero.

interface TipoIngressoprops {
    tipoIngresso: string;
    valor: string;

}
export default function TipoIngresso ({tipoIngresso,valor}:TipoIngressoprops){
    return (
        <div>
<text>{tipoIngresso}</text>
<text>: {valor}</text>
        </div>
    )
}