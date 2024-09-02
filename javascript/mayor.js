// Ej 10

// Realizar una función que, dado 4 números, me diga cuál es mayor.

var numero1 = Number(prompt("Escribe un número"));
var numero2 = Number(prompt("Escribe otro número"));
var numero3 = Number(prompt("Escribe otro número"));
var numero4 = Number(prompt("Escribe otro número"));

function encontrarMayor(n1, n2, n3, n4) {
  if (n1 > n2 && n1 > n3 && n1 > n4) {
    return n1;
  } else if (n2 > n3 && n2 > n4) {
    return n2;
  } else if (n3 > n4) {
    return n3;
  } else {
    return n4;
  }
}

var mayor = encontrarMayor(numero1, numero2, numero3, numero4);

document.write("El mayor de los cuatro números es: " + mayor);
