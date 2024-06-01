var semaforo= prompt("Indique uno de los 3 colores del semaforo (en minúsculas) y se le indicará su significado:")
var opciones = ["verde", "amarillo", "rojo"];

if (semaforo === ("verde")) {
  alert("Continua");
} else if (semaforo === ("amarillo")) {
  alert("Despacio");
} else if (semaforo === ("rojo")) {
  alert("Pare");
} else if (semaforo !== ("verde", "amarillo", "rojo")) {
  alert("Error, ese color no se encuentra en los semaforos");
}