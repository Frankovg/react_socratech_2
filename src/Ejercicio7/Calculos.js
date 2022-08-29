import React, { useState } from "react";

export const Calculos = () => {
  // Calculadora
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operador, setOperador] = useState("+");
  const [resultado, setResultado] = useState("");
  const [message, setMessage] = useState(false);
  // Temperaturas
  const [resultado2, setResultado2] = useState("");
  const [temp, setTemp] = useState(0);
  const [indicador, setIndicador] = useState("");

  const calcular = () => {
    if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
      setMessage(true);
    } else {
      let res = 0;
      switch (operador) {
        case "+":
          res = parseFloat(num1) + parseFloat(num2);
          break;
        case "-":
          res = parseFloat(num1) - parseFloat(num2);
          break;
        case "÷":
          res = parseFloat(num1) / parseFloat(num2);
          break;
        case "x":
          res = parseFloat(num1) * parseFloat(num2);
          break;
      }
      setResultado(res);
      setMessage(false);
    }
  };

  const calcular2 = () => {
    if (isNaN) {
      alert("Intorduce un número");
    } else {
      switch (indicador) {
        case "ºC a ºF":
          setResultado2(`${temp * 1.8 + 32} ºF`);
          break;
        case "ºC a ºK":
          setResultado2(`${temp + 273.15} ºK`);
          break;
        case "ºF a ºC":
          setResultado2(`${(temp - 32) / 1.8} ºC`);
          break;
        case "ºF a ºK":
          setResultado2(`${((temp - 32) * 5) / 9 + 273.15} ºK`);
          break;
        case "ºK a ºC":
          setResultado2(`${temp - 273.15} ºC`);
          break;
        case "ºK a ºF":
          setResultado2(`${((temp - 273.15) * 9) / 5 + 32} ºF`);
          break;
        default:
          setResultado("Error");
      }
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setTemp(value);
  };

  const cleaner = () => {
    setTemp(0);
    setResultado2("");
  };

  return (
    <div className="wrapper">
      <div className="lista">
        <h1>Calcular</h1>
        <div className="calculadora">
          <input
            type="number"
            autoComplete="off"
            onChange={(event) => setNum1(event.target.value)}
            value={num1}
          />
          <h1>{operador}</h1>
          <input
            type="number"
            autoComplete="off"
            onChange={(event) => setNum2(event.target.value)}
            value={num2}
          />
        </div>
        <button onClick={calcular}>Calcular</button>
        <p>Resultado: {resultado}</p>
        {message && <h3>Uno de los operandos no es un número</h3>}

        <button onClick={() => setOperador("+")}>+</button>
        <button onClick={() => setOperador("-")}>-</button>
        <button onClick={() => setOperador("÷")}>÷</button>
        <button onClick={() => setOperador("x")}>x</button>
        {/* darle estilo al botón según seleccionado o no:
        className={operador === "+" ? 'select' : 'noSelect'} */}
      </div>

      <div className="lista">
        <h1>Compo Conversor</h1>
        <hr />
        <input
          type="number"
          value={temp}
          autoComplete="off"
          onChange={handleChange}
        />
        <p>Seleccionar conversión</p>
        <p>{indicador}</p>

        <div>
          <button onClick={() => setIndicador("ºC a ºF")}>ºC a ºF</button>
          <button onClick={() => setIndicador("ºC a ºK")}>ºC a ºK</button>
          <button onClick={() => setIndicador("ºF a ºC")}>ºF a ºC</button>
          <button onClick={() => setIndicador("ºF a ºK")}>ºF a ºK</button>
          <button onClick={() => setIndicador("ºK a ºC")}>ºK a ºC</button>
          <button onClick={() => setIndicador("ºK a ºF")}>ºK a ºF</button>
          <br />
          <br />
          <button onClick={calcular2}>Calcular</button>
          <button onClick={cleaner}>Limpiar</button>
        </div>
        <h2>Resultado: {resultado2}</h2>
      </div>
    </div>
  );
};
