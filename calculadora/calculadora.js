var numero1= prompt("Indique el primer número de la operación")
var operacion= prompt("Indique el tipo de operación que desea realizar: + Suma, - Resta, * Multiplicación, / División, ** Exponenciación")
var numero2= prompt("Indique el segundo número de la operación")
console.log= alert;

if (operacion === "+") {
  alert(parseFloat(numero1) + parseFloat(numero2));
} else if (operacion === "-") {
  alert(parseFloat(numero1) - parseFloat(numero2));
} else if (operacion === "/") {
  alert(parseFloat(numero1) / parseFloat(numero2));
} else if (operacion === "*") {
  alert(parseFloat(numero1) * parseFloat(numero2));
} else if (operacion === "**") {
  alert(parseFloat(numero1) ** parseFloat(numero2));
} else {
  alert("Operación no válida");
}
