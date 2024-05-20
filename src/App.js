import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaMetros = parseFloat(altura.replace(',', '.')) / 100;
    const pesoFloat = parseFloat(peso.replace(',', '.'));
    if (alturaMetros && pesoFloat) {
      const calculoIMC = pesoFloat / (alturaMetros * alturaMetros);
      setImc(calculoIMC.toFixed(2));

      if (calculoIMC < 18.5) {
        setClassificacao('Magro');
      } else if (calculoIMC >= 18.5 && calculoIMC < 24.9) {
        setClassificacao('Normal');
      } else {
        setClassificacao('Obeso');
      }
    } else {
      alert('Por favor, insira valores válidos para altura e peso.');
    }
  };

  const limparCampos = () => {
    setAltura('');
    setPeso('');
    setImc(null);
    setClassificacao('');
  };

  return (
    <div className="App">
      <h1>Calculadora IMC</h1>
      <div>
        <label>Altura (ex: 170):</label>
        <input
          type="text"
          placeholder="Digite sua altura"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>
      <div>
        <label>Peso (ex: 69):</label>
        <input
          type="text"
          placeholder="Digite seu peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <div>
        <button onClick={calcularIMC}>Calcular</button>
        <button onClick={limparCampos}>Limpar</button>
      </div>
      {imc && (
        <p>
          Seu IMC é: {imc} ({classificacao})
        </p>
      )}
    </div>
  );
}

export default App;
