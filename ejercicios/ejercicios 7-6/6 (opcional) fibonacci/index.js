function printFibonacciSequence(n) {

  let n = prompt("Indica cuantos valores de la escala de fibonacci deseas ver:");

  if (n <= 0) {
    throw new alert('Error: debe ser un numero positivo');
  }

  let anterior = 0;
  let uso = 1;

  console.log(0);

  for (let i = 1; i < n; i++) {
    const siguiente = anterior + uso;
    console.log(siguiente);
    anterior = uso;
    uso = siguiente;
  }
}

printFibonacciSequence();