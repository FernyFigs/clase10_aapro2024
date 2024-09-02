// Ej 10

// Realizar una función que, dado 3 números, me diga cuál es menor.

var numero1 = prompt("Escribe un número");
var numero2 = prompt("Escribe otro número");
var numero3 = prompt("Escribe otro número");

function encontrarMenor(n1, n2, n3) {
  if (n1 < n2 && n1 < n3) {
    return n1;
  } else if (n2 < n3) {
    return n2;
  } else {
    return n3;
  }
}

var menor = encontrarMenor(numero1, numero2, numero3);
document.write("El menor de los tres números es: " + menor);
