//Alumno: González Oviedo Tomás Emiliano

import { Potencia } from "./Potencia.js";

const $form = document.getElementById("potencia-form");

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  resetearCarta();
  generarCuerpoCarta();
  generarTituloCarta();
  generarListaPotencia();
  const formPotencia = new FormData(e.target);
  const potencia = formPotencia.get("potencia");
  const continua = validar(potencia);
  if (continua) {
    const potencias = [];
    for (let i = 1; i <= 5; i++) {
      potencias.push(new Potencia(potencia, i, calcular(potencia, i)));
    }
    mostrarTituloCarta(potencia);
    potencias.forEach((potencia) => {
      mostrarListaPotencia(
        parseInt(Number(potencia.numero)),
        potencia.potencia,
        potencia.resultado
      );
    });
  }
  $form.reset();
});

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

const calcular = (input, i) => {
  let potencia = 0;

  potencia = parseInt(Number(input)) ** i;

  return potencia;
};

const generarCuerpoCarta = () => {
  const $carta = document.getElementById("resultado-potencias");
  const $cuerpoCarta = document.createElement("div");
  $cuerpoCarta.setAttribute(`id`, `cuerpo-carta`);
  $cuerpoCarta.classList.add(`card-body`);
  $carta.appendChild($cuerpoCarta);
  return $cuerpoCarta;
};

const generarTituloCarta = () => {
  const $cuerpoCarta = document.getElementById("cuerpo-carta");
  const $tituloCarta = document.createElement("h5");
  $tituloCarta.setAttribute(`id`, `titulo-carta`);
  $tituloCarta.classList.add(`card-title`);
  $cuerpoCarta.appendChild($tituloCarta);
  return $tituloCarta;
};

const generarListaPotencia = () => {
  const $cuerpoCarta = document.getElementById("cuerpo-carta");
  const $listaPotencias = document.createElement("ul");
  $listaPotencias.setAttribute(`id`, `lista-potencias`);
  $listaPotencias.classList.add(`list-group`);
  $cuerpoCarta.appendChild($listaPotencias);
  return $listaPotencias;
};

const resetearCarta = () => {
  const $carta = document.getElementById("resultado-potencias");
  if ($carta.childNodes.length > 0) {
    while ($carta.firstChild) {
      $carta.removeChild($carta.firstChild);
    }
  }
};
