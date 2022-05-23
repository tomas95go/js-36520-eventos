//Alumno: González Oviedo Tomás Emiliano

import { Potencia } from "./Potencia.js";

let input = prompt(
  `Por favor, elegí un número entero del 1 al 10 y te encuentro las potencias: 1 a la 5.`
);

const validar = (input) => {
  let continua = true;
  if (isNaN(input)) {
    continua = false;
    alert(`Lo lamento, su input no es valido.`);
  }

  if (parseInt(Number(input)) > 10) {
    continua = false;
    alert(`Lo lamento, su número debe ser menor a 10.`);
  }

  if (parseInt(Number(input)) <= 0) {
    continua = false;
    alert(`Lo lamento, su número debe ser mayor a 0.`);
  }

  return continua;
};

const calcular = (input, i) => {
  let potencia = 0;

  potencia = parseInt(Number(input)) ** i;

  return potencia;
};

const mostrarTituloCarta = (potencia) => {
  const $tituloCarta = document.getElementById("titulo-carta");
  $tituloCarta.innerText = `Potencia del número: ${potencia}`;
};

const mostrarListaPotencia = (numero, potencia, resultado) => {
  const $listaPotencias = document.getElementById("lista-potencias");
  const $potencia = document.createElement("li");
  $potencia.classList.add("list-group-item");
  $potencia.innerText = `${numero} ^ ${potencia} es: ${resultado}`;
  $listaPotencias.appendChild($potencia);
};

if (validar(input)) {
  const potencias = [];
  for (let i = 1; i <= 5; i++) {
    const potencia = new Potencia(input, i, calcular(input, i));
    potencias.push(potencia);
  }
  mostrarTituloCarta(input);
  potencias.forEach((potencia) => {
    mostrarListaPotencia(
      parseInt(Number(potencia.numero)),
      potencia.potencia,
      potencia.resultado
    );
  });
}
