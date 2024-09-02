// Ej 10

// Función que calcule el área de un círculo

var numero = prompt("Escribe un número");
var resultado = esParOImpar(Number(numero));
document.write(resultado);

function esParOImpar(numero) {
  if (numero % 2 === 0) {
    return "El número " + numero + " es par.";
  } else {
    return "El número " + numero + " es impar.";
  }
}
