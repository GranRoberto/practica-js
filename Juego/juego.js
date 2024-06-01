var jugador1= prompt("Nombre del Jugador 1:")
var jugador2= prompt("Nombre del Jugador 2:")

var opcion1 = prompt((jugador1) + ", elige una opción: piedra, papel o tijera:");
var opcion2 = prompt((jugador2) + ", elige una opción: piedra, papel o tijera:");

var opciones = ["piedra", "papel", "tijera"];
var resultado = [alert];
console.log(resultado);

if (opcion1 === opcion2) {
  alert("Empate");
} else if (opcion1 === "piedra" && opcion2 === "tijera" || opcion1 === "papel" && opcion2 === "piedra" || opcion1 === "tijera" && opcion2 === "papel") {
  alert("Ganó " + (jugador1));
} else {
  alert("Ganó " + (jugador2));
}