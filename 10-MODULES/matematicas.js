// se implementan en jS
//  1. COMMON JS (tecnologia clasica)
//  2. Usando Modules de JS (ecma 6)

const PI = 3.1416;
const NUMEROE = 2.71828;

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  if (a > b) {
    return a - b;
  }
  console.log("para restar el primer numero debe ser mayor al segundo numero");
}

//OTRA FORMA como objeto desestructurado
export { PI, NUMEROE, sumar, restar };
