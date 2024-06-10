function area (base, altura){
  var base = prompt("Indique el valor de la base del triangulo:");
  var altura = prompt("Indique el valor de la altura del triangulo:");
  
  return alert('el area del triangulo es: ' + ((parseFloat(base) * parseFloat(altura)) / 2));
}

area();