// se implementan en jS
//  1. COMMON JS (tecnologia clasica)
//  2. Usando Modules de JS (ecma 6)

export const PI = 3.1416;

export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  if (a > b) {
    return a - b;
  }
  console.log("para restar el primer numero debe ser mayor al segundo numero");
}
