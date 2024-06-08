function calcular(numero1, numero2) {
  var numero1= prompt("Indique el primer número de la operación");
  var operacion= prompt("Indique el tipo de operación que desea realizar: + Suma, - Resta, * Multiplicación, / División, ** Exponenciación");
  var numero2= prompt("Indique el segundo número de la operación");

  if (operacion === "+") {
    return alert(parseFloat(numero1) + parseFloat(numero2));
  } else if (operacion === "-") {
    return alert(parseFloat(numero1) - parseFloat(numero2));
  } else if (operacion === "/") {
    return alert(parseFloat(numero1) / parseFloat(numero2));
  } else if (operacion === "*") {
    return alert(parseFloat(numero1) * parseFloat(numero2));
  } else if (operacion === "**") {
    return alert(parseFloat(numero1) ** parseFloat(numero2));
  } else {
    return alert("Operación no válida");
  }
}

calcular();
calcular();