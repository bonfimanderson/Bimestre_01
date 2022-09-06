import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [contador,setContador] = useState(0)
  const [valor,setValor] =useState(0)
  const [adicionar, setAdicionar] =useState (false)

useEffect(() => {
  const numeroformatado = parseInt (valor)
  if (!isNaN (numeroformatado)){
    if (adicionar === true){
      setContador (contador + numeroformatado)
    }
    if (adicionar === false){
      setContador (contador - numeroformatado)
    }
  }
},[valor])

function reset (){
  setContador(0)
  setValor (0)
  document.getElementById("textinput").value =""

}
function subtrair(){
  setValor (document.getElementById("textinput").value)
setAdicionar (false)
document.getElementById("textinput").value =""
}
function soma (){
  setValor (document.getElementById("textinput").value)
setAdicionar (true)
document.getElementById("textinput").value =""

}


  return (
    <div className="App">
      <text>Soma: {contador}</text>
      <input id='textinput'type="number"/>
      <button onClick={soma}value = "enviar">soma</button>
      <button onClick={subtrair}value = "enviar">subtrair</button>
      <button onClick={reset}value = "enviar">reset</button>
    </div>
  );
}

export default App;
