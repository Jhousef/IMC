import { useState } from 'react';
import './App.css';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [mensagem, setMensagem] = useState('');

  function calcularIMC() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    /*var resul = document.querySelector("h2#res")*/


    if (imc < 18.6) {
      setMensagem("você está abaixo do peso! seu IMC: " +
        + imc.toFixed(2))
    }
    else if (imc >= 18.6 && imc < 24.9) {
      setMensagem("peso ideal! seu IMC: " +
        imc.toFixed(2))
    }
    else if (imc >= 24.9 && imc < 34.9) {
      setMensagem("você está levemente acima do peso! seu IMC: " +
        imc.toFixed(2))
    }
    else if (imc > 34.9) {
      setMensagem("cuidado, Obesidade! seu IMC: " +
        imc.toFixed(2))
    }



  }



  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div className="area-input">
        <input
          type="text"
          placeholder="Peso em (kg) Ex: 90"
          value={peso}
          onChange={(e) => setPeso(e.target.value)} />
        <input
          type="text"
          placeholder="Altura em (cm) Ex: 180"
          value={altura}
          onChange={(e) => setAltura(e.target.value)} />

        <button onClick={calcularIMC}>
          calcular
        </button>
      </div>

      <h2>{mensagem}</h2>

    </div>
  )
}