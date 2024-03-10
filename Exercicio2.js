function sequenciaFibonacci(num) {
  let arraySequencia = [0, 1];
  for (let index = 2; index <= num; index++) {
    arraySequencia[index] =
      arraySequencia[index - 1] + arraySequencia[index - 2];
  }
  console.log(arraySequencia);
  return arraySequencia;
}

function verificarNum(num) {
  let arraySequencia = sequenciaFibonacci(17);

  if (arraySequencia.includes(num)) {
    return `${num} existe na sequência`;
  } else {
    return `${num} não existe na sequência`;
  }
}

let num = 25;

console.log(verificarNum(num));
