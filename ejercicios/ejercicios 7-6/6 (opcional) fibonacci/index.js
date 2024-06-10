function Fibonacci(n) {

  let anterior = 0;
  let nuevo = 1;

  console.log(0);

  for (let i = 1; i < n; i++) {
    const siguiente = anterior + nuevo;
    console.log(siguiente);
    anterior = nuevo;
    nuevo = siguiente;
  }
}

Fibonacci(3);