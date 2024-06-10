function hipotenusa (base, altura){
  var base = prompt("Indique el valor de la base del triangulo:");
  var altura = prompt("Indique el valor de la altura del triangulo:");

  return alert('La hipotenusa del triangulo es: ' + (Math.sqrt((base **2) + (altura **2))));
}

hipotenusa();